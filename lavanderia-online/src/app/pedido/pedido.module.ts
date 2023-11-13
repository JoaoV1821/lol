import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { PedidoComponent } from './pedido';
import { HeaderComponent } from './header';
import { CategoriaComponent } from './categoria';
import { PedidoService } from './services';
import { ModalPedidoComponent } from './modal-pedido/modal-pedido.component';


@NgModule({
  declarations: [
    PedidoComponent,
    HeaderComponent,
    CategoriaComponent,
    ModalPedidoComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PedidoComponent,
    HeaderComponent,
    CategoriaComponent,
  ],
  providers: [
    CategoriaComponent,
    PedidoService

  ]
})
export class PedidoModule { }
