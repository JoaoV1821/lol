import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutocadastroService } from './services';


@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AutocadastroService
  ]
})
export class AutocadastroModule { }
