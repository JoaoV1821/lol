import { Injectable } from '@angular/core';

import { Pedido } from 'src/app/shared/models/pedido.model';

const LS_CHAVE: string = "pedidos";

@Injectable({
  providedIn: 'root'
})
export class ConsultaPedidoService {

  constructor() { }

  listarTodosPedidos(): Pedido[] {
    const pedidos = localStorage[LS_CHAVE];

    return pedidos ? JSON.parse(pedidos) : [];
  }

  inserirPedido(pedido: Pedido): void {
    const pedidos = this.listarTodosPedidos();

    pedidos.push(pedido);

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

  buscarPorPedido(numeroPedido: number): Pedido | undefined {
    const pedidos: Pedido[] = this.listarTodosPedidos();

    return pedidos.find(pedido => pedido.numero === numeroPedido);
  }

  atualizarPedido(pedido: Pedido): void {
    const pedidos: Pedido[] = this.listarTodosPedidos();

    pedidos.forEach((obj, index, objs) => {
      if (pedido.numero === obj.numero) {
        objs[index] = pedido
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

  removerPedido(numeroPedido: number): void {
    let pedidos: Pedido[] = this.listarTodosPedidos();

    pedidos = pedidos.filter(pedido => pedido.numero !== numeroPedido);

    localStorage[LS_CHAVE] = JSON.stringify(pedidos);
  }

}
