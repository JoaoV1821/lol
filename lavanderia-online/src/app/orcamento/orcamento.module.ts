import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcamentoComponent } from './orcamento';
import { OrcamentoService } from './services';
import { Format } from '../shared/pipes/format';
@NgModule({
  declarations: [
    OrcamentoComponent
  ],
  imports: [
    CommonModule,
    Format
  ],
  exports: [
    OrcamentoComponent
  ],
  providers: [
    OrcamentoService
  ]
})
export class OrcamentoModule { }
