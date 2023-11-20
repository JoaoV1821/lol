import { Component, OnInit } from '@angular/core';
import { PaginaInicialFuncionarioService } from '../services';
import { PedidosEmAberto } from 'src/app/shared/models/pedidos-em-aberto.model';
import { Item } from 'src/app/shared/models/item.model';
import { Pedido } from '../../shared/models/pedido.model'
import { RequestMaker } from 'src/app/services/requestService';

interface pedido {
  pedido: string,
  valor: number,
  data: string,
  prazo: string,
  status: string
}
@Component({
  selector: 'app-listar-pedidos-abertos',
  templateUrl: './listar-pedidos-abertos.component.html',
  styleUrls: ['./listar-pedidos-abertos.component.css']
})
export class ListarPedidosAbertosComponent implements OnInit {
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










  /*
    pedido!: Pedido;
    roupas!: Item[];
    vazio: number = 0;
    dados: Pedido[] = [];
  
    pedidosEmAberto: PedidosEmAberto[] = [];
  
    constructor(private paginaInicialFuncionarioService: PaginaInicialFuncionarioService) {
  
    }
  
    ngOnInit(): void {
      this.listarPedidos();
      //this.pedidosEmAberto = this.listarTodosPedidosEmAbertos();    
    }
  
    async listarPedidos() {
      let response = await RequestMaker.getData<Pedido>("/usuario/get/pedidos");
      console.log(response);
      if (response.ok(response.data)) {
        this.pedido = response.data;
        if (this.pedido.roupas) {
          this.roupas = this.pedido.roupas;
        }
        console.log(this.roupas);
      }
  
    }
  
    async confirmarRecolhimento(pedido: Pedido) {
  
      if (confirm(`Deseja realmente confirmar a lavegem do pedido ${pedido.numero}?`)) {
  
        RequestMaker.postData<void>("/pedido/update/status", {
          numeroPedido: pedido.numero,
          status: "RECOLHIDO"
        });
  
      }
    }
  
    async buscarPorPedido(numero: string): Promise<void> {
      let response = await RequestMaker.getData<Pedido>(`/usuario/get/pedido?numeroPedido=${numero}`);
      if (response.ok(response.data)) {
        this.pedido = response.data;
        if (this.pedido.roupas) {
          this.roupas = this.pedido.roupas;
        }
        console.log(this.roupas);
        this.vazio = 1;
      }
      else {
        this.vazio = 2;
      }
    }
  
    getRoupas(): Item[] | undefined {
      if (this.pedido != undefined) {
        if (this.pedido.roupas != undefined) {
          this.roupas = this.pedido.roupas;
        }
      }
      return [];
    }
  
  */
}
