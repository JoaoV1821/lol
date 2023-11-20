import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { RequestMaker } from 'src/app/services/requestService';

interface pedido {
  pedido: string,
  valor: number,
  data: string,
  prazo: string,
  status: string
}
@Component({
  selector: 'app-listagemF',
  templateUrl: './listagemF.component.html',
  styleUrls: ['./listagemF.component.css']
})
export class ListagemFComponent implements OnInit {

  constructor() { }

  estado_pedido: string | null = null;
  dados: Pedido[] = [];
  dataIni: any;
  dataFi: any;

  async ngOnInit(): Promise<void> {
    this.carregarDadosDoServidor(null);
  }

  onDateInputChange(): void {
    this.carregarDadosDoServidor(this.estado_pedido);
  }

  ///api/pedido/get/pedidos&dataInicial=String&dataPrazo=String&status=String
  async carregarDadosDoServidor(estado: string | null) {
    let response = null;

    if (this.dataIni && this.dataFi) {
      response = await RequestMaker.getData<Pedido[]>(`/pedido/get/pedidos?dataInicial=${this.dataIni}&dataPrazo=${this.dataFi}`)
    }
    else if (this.dataIni && !this.dataFi) {
      response = await RequestMaker.getData<Pedido[]>(`/pedido/get/pedidos?dataInicial=${this.dataIni}`)
    }
    else if (this.dataIni == null && this.dataFi == null && estado == null) {
      response = await RequestMaker.getData<Pedido[]>("/pedido/get/pedidos");
    }
    if (response?.ok(response.data)) {
      this.dados = response.data
    }

  }
  /* {
  "numero": "Long",
  "status": "String",
  "cpf":"string"
} */
  async confirmarRecolhimento(pedido: Pedido) {

    if (confirm(`Deseja realmente confirmar o recolhimento do pedido ${pedido.numero} do cliente ${pedido.cadastro?.cpf}?`)) {

      if (pedido.cadastro) {
        RequestMaker.postData<void>("/pedido/update/status", {
          numeroPedido: pedido.numero,
          status: "RECOLHIDO",
          cpf: pedido.cadastro?.cpf
        });
      }

    }
  }
  /* {
     "numero": "Long",
     "cpf" : "String",
     "status": "String"
   }*/
  async confirmarLavagem(pedido: Pedido) {

    if (confirm(`Deseja realmente confirmar a lavagem do pedido ${pedido.numero} do cliente ${pedido.cadastro?.cpf}?`)) {

      if (pedido.cadastro) {
        RequestMaker.postData<void>("/pedido/update/status", {
          numeroPedido: pedido.numero,
          status: "AGUARDANDO PAGAMENTO",
          cpf: pedido.cadastro?.cpf
        });
      }
    }
  }


  /* {
    "numero": "Long",
    "cpf" : "String",
    "status": "String"
  }*/
  async finalizarPedido(pedido: Pedido) {

    if (confirm(`Deseja realmente finalizar o pedido ${pedido.numero} do cliente ${pedido.cadastro?.cpf}?`)) {

      if (pedido.cadastro) {
        RequestMaker.postData<void>("/pedido/update/status", {
          numeroPedido: pedido.numero,
          status: "FINALIZADO",
          cpf: pedido.cadastro?.cpf
        });
      }
    }
  }
}
