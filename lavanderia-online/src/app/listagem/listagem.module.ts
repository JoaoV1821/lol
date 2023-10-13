import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ListagemComponent } from './listagem/listagem.component';

@NgModule({
  declarations: [
    ListagemComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListagemComponent
  ],
  providers: [
  ]
})
export class ListagemModule { }