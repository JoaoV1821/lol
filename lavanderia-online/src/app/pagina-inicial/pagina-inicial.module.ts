import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { PaginaInicialComponent } from './pagina-inicial';
import { PaginaInicialService } from './services';
import { Format } from '../shared/pipes/format';

@NgModule({
  declarations: [
    PaginaInicialComponent,
  ],
  imports: [
    CommonModule,
    NgxMaskDirective,
    NgxMaskPipe,
    Format
  ],
  providers: [
    provideNgxMask()
  ]
})
export class PaginaInicialModule { }
