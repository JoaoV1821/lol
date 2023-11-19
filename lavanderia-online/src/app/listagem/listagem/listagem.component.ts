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
  dados: Pedido[] = [
    new Pedido(10, [], 100, "2022-02-02", "2022-02-03", "EM ABERTO"),
    new Pedido(10, [], 100, "2022-02-02", "2022-02-03", "AGUARDANDO PAGAMENTO"),
    new Pedido(10, [], 100, "2022-02-02", "2022-02-03", "FINALIZADO"),
  ];

  constructor(private ref: ChangeDetectorRef) {
  }

  async ngOnInit(): Promise<void> {
    //this.carregarDadosDoServidor(null);
  }

  async carregarDadosDoServidor(estado: string | null) {
    let response = null;
    if (estado == null) {
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

}
