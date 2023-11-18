import { Component, OnInit } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { PaginaInicialService } from '../services';
import { Pedido } from 'src/app/shared';

@Component({
  selector: 'app-pagina-inicial',
  templateUrl: './pagina-inicial.component.html',
  styleUrls: ['./pagina-inicial.component.css']
})
export class PaginaInicialComponent implements OnInit {

  pedidos!: Pedido[];
  vazio = false;

  constructor() {

  }

  async ngOnInit(): Promise<void> {
    let response = await RequestMaker.getData<Pedido[]>("/usuario/get/pedidos");
    if (response.ok(response.data)) {
      this.pedidos = response.data;
    } else {
      this.vazio = true;
    }
  }

  async alterarStatus(pedido: Pedido) {

    if (confirm(`Deseja realmente remover o pedido ${pedido.numero}?`)) {

      RequestMaker.postData<void>("/usuario/update/pedido/status", {
        numeroPedido: pedido.numero,
        status: "CANCELADO"
      });

    }
  }
}
