import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PaginaInicialComponent } from './pagina-inicial';
import { PaginaInicialService } from './services';

@NgModule({
  declarations: [
    PaginaInicialComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PaginaInicialModule { }
