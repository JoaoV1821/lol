import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ConsultaPedidoService } from './services';
import { ConsultaPedidoComponent } from './consulta-pedido';
import { NumericoDirective } from '../shared/directives';
import { Format } from '../shared/pipes/format';

@NgModule({
  declarations: [
    ConsultaPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    Format
  ],
  exports: [
    ConsultaPedidoComponent
  ],
  providers: [
    ConsultaPedidoService
  ]
})
export class ConsultaPedidoModule { }
