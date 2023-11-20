import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { Pedido } from 'src/app/shared';

interface pedido {
  pedido: string,
  valor: number,
  data: string,
  prazo: string,
  status: string
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  estado_pedido: string | null = null;
  dados: Pedido[] = [];

  constructor(private ref: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    this.carregarDadosDoServidor(null);
    // console.log(this.dados.forEach((dado) => { console.log(dado.status) }));
  }

  async carregarDadosDoServidor(estado: string | null) {
    let response = null;
    if (estado == null || estado === 'TODOS') {
      response = await RequestMaker.getData<Pedido[]>("/usuario/get/pedidos");
    }
    else {
      response = await RequestMaker.getData<Pedido[]>(`/usuario/get/pedidos?status=${estado}`);
    }
    if (response.ok(response.data)) {
      this.dados = response.data
    }
    this.ref.markForCheck();
    console.log(this.dados);
    console.log(estado);

  }


  mudarEstadoPedidoFiltro(estado: Event) {
    const target = estado.target as HTMLSelectElement;
    this.estado_pedido = target.value.toUpperCase();
    this.carregarDadosDoServidor(this.estado_pedido);
  }


  async alterarStatus(pedido: Pedido) {

    if (confirm(`Deseja realmente cancelar o pedido ${pedido.numero}?`)) {

      RequestMaker.postData<void>("/usuario/update/pedido/status", {
        numeroPedido: pedido.numero,
        status: "CANCELADO"
      });

    }
  }

}
