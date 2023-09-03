import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagamentoComponent } from './pagamento';
import { PagamentoService } from './service';


@NgModule({
  declarations: [
    PagamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    PagamentoComponent
  ],
  providers: [
    PagamentoService
  ]
})
export class PagamentoModule { }
