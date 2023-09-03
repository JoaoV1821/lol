import { Injectable } from '@angular/core';

import { PedidosEmAberto } from 'src/app/shared/models/pedidos-em-aberto.model';

const LS_CHAVE: string = "pedidosEmAberto";

@Injectable({
  providedIn: 'root'
})

export class PaginaInicialFuncionarioService {

  constructor() { }

  listarTodosPedidosEmAberto(): PedidosEmAberto[] {
    const pedidosEmAberto = localStorage[LS_CHAVE];

    return pedidosEmAberto ? JSON.parse(pedidosEmAberto) : [];
  }

  inserirPedidoEmAberto(pedidoEmAberto: PedidosEmAberto): void {
    const pedidosEmAberto = this.listarTodosPedidosEmAberto();

    pedidosEmAberto.push(pedidoEmAberto);

    localStorage[LS_CHAVE] = JSON.stringify(pedidosEmAberto);
  }

  buscarPorPedidoEmAberto(numeroPedido: number): PedidosEmAberto | undefined {
    const pedidosEmAberto: PedidosEmAberto[] = this.listarTodosPedidosEmAberto();

    return pedidosEmAberto.find(pedidoEmAberto => pedidoEmAberto.numeroPedido === numeroPedido );
  }

  atualizarPedidoEmAberto(pedidoEmAberto: PedidosEmAberto): void {
    const pedidosEmAberto: PedidosEmAberto[] = this.listarTodosPedidosEmAberto();

    pedidosEmAberto.forEach( (obj, index, objs) => {
      if (pedidoEmAberto.numeroPedido === obj.numeroPedido) {
        objs[index] = pedidoEmAberto
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(pedidosEmAberto);
  }

  removerPedidoEmAberto(numeroPedido: number): void {
    let pedidosEmAberto: PedidosEmAberto[] = this.listarTodosPedidosEmAberto();

    pedidosEmAberto = pedidosEmAberto.filter(pedidosEmAberto => pedidosEmAberto.numeroPedido !== numeroPedido);

    localStorage[LS_CHAVE] = JSON.stringify(pedidosEmAberto);
  }

}
