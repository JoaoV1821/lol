import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutocadastroService } from './services';

import { NgxMaskModule, IConfig } from 'ngx-mask'
export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    NgxMaskModule.forRoot()
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AutocadastroService
  ]
})
export class AutocadastroModule { }
