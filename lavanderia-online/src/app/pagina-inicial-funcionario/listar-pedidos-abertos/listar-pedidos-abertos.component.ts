import { Component, OnInit } from '@angular/core';
import { PaginaInicialFuncionarioService } from '../services';
import { PedidosEmAberto } from 'src/app/shared/models/pedidos-em-aberto.model';
@Component({
  selector: 'app-listar-pedidos-abertos',
  templateUrl: './listar-pedidos-abertos.component.html',
  styleUrls: ['./listar-pedidos-abertos.component.css']
})
export class ListarPedidosAbertosComponent implements OnInit {

  pedidosEmAberto: PedidosEmAberto[] = [];

  constructor(private paginaInicialFuncionarioService : PaginaInicialFuncionarioService) {

  }

  ngOnInit(): void {
    this.pedidosEmAberto = this.listarTodosPedidosEmAbertos();    
  }

  listarTodosPedidosEmAbertos(): PedidosEmAberto[] {
    
    /*
    return this.paginaInicialFuncionarioService.listarTodosPedidosEmAberto();
    */
    
    return [
      new PedidosEmAberto(100, "2 camisetas, 1 calça jeans, 1 moleton"),
      new PedidosEmAberto(110, "1 camisa, 1 calça jeans"),
      new PedidosEmAberto(122, "1 moleton"),
      new PedidosEmAberto(136, "3 calças jeans"),
    ]
    

  }
}
