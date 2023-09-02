import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PedidoComponent } from './pedido';
import { HeaderComponent } from './header';
import { CategoriaComponent } from './categoria';
import { PedidoService } from './services';


@NgModule({
  declarations: [
    PedidoComponent,
    HeaderComponent,
    CategoriaComponent
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    PedidoComponent,
    HeaderComponent,
    CategoriaComponent,
  ],
  providers: [
    PedidoService
  ]
})
export class PedidoModule { }
