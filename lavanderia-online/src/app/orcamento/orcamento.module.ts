import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OrcamentoComponent } from './orcamento';
import { OrcamentoService } from './services';

@NgModule({
  declarations: [
    OrcamentoComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    OrcamentoComponent
  ],
  providers: [
    OrcamentoService
  ]
})
export class OrcamentoModule { }
