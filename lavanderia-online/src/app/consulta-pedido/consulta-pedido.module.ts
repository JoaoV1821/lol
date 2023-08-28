import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsultaPedidoService } from './services';
import { ConsultaPedidoComponent } from './consulta-pedido/consulta-pedido.component';



@NgModule({
  declarations: [
    ConsultaPedidoComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    ConsultaPedidoService
  ]
})
export class ConsultaPedidoModule { }
