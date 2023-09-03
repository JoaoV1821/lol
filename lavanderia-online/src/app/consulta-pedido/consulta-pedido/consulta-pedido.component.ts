import { Component, OnInit } from '@angular/core';

import { ConsultaPedidoService } from '../services';
import { Pedido } from '../../shared/models/pedido.model'

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit{

  pedidos: Pedido[] = [];

  constructor(private consultaPedidoService: ConsultaPedidoService) {

  }

  ngOnInit(): void {
    this.pedidos = this.listarTodosPedidos();
  }

  listarTodosPedidos(): Pedido[] {

    /*
    return this.consultaPedidoService.listarTodosPedidos();
    */
    
    return[
      new Pedido(100, "camiseta", 2, 4.99),
      new Pedido(100, "calça jeans", 1, 8.00),
      new Pedido(100, "moleton  ", 1, 12.30)
    ]
    
  }
}
