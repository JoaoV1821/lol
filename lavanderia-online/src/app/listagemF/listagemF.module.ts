import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Format } from 'src/app/shared/pipes/format';
import { ListagemFComponent } from './listagemF/listagemF.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [
    ListagemFComponent
  ],
  imports: [
    CommonModule,
    Format,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  exports: [
    ListagemFComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class ListagemFModule { }