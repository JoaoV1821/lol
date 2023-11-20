import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialFuncionarioService } from './services';
import { ListarPedidosAbertosComponent } from './listar-pedidos-abertos/listar-pedidos-abertos.component';
import { Format } from 'src/app/shared/pipes/format';

@NgModule({
  declarations: [
    ListarPedidosAbertosComponent
  ],
  imports: [
    CommonModule,
    Format
  ],
  providers: [
    PaginaInicialFuncionarioService
  ]
})
export class PaginaInicialFuncionarioModule { }
