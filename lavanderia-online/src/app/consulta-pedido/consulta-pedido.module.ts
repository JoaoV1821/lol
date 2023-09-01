import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaPedidoService } from './services';
import { ConsultaPedidoComponent } from './consulta-pedido';

@NgModule({
  declarations: [
    ConsultaPedidoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ConsultaPedidoComponent
  ],
  providers: [
    ConsultaPedidoService
  ]
})
export class ConsultaPedidoModule { }
