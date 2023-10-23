import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutocadastroService } from './services';
import { SharedModule } from '../shared';


@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AutocadastroService
  ]
})
export class AutocadastroModule { }
