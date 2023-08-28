import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialFuncionarioService } from './services';
import { ListarPedidosAbertosComponent } from './listar-pedidos-abertos/listar-pedidos-abertos.component';


@NgModule({
  declarations: [
    ListarPedidosAbertosComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    PaginaInicialFuncionarioService
  ]
})
export class PaginaInicialFuncionarioModule { }
