import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Format } from '../shared/pipes/format';
import { PagamentoComponent } from './pagamento';
import { PagamentoService } from './service';

import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    PagamentoComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    Format
  ],
  exports: [
    PagamentoComponent
  ],
  providers: [
    PagamentoService
  ]
})
export class PagamentoModule { }
