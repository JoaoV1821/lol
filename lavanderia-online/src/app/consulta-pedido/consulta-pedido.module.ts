import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConsultaPedidoComponent } from './consulta-pedido';
import { ConsultaPedidoService } from './services';



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
