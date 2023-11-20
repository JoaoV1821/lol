import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Format } from 'src/app/shared/pipes/format';
import { ListagemFComponent } from './listagemF/listagemF.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    ListagemFComponent
  ],
  imports: [
    CommonModule,
    Format,
    NgxMaskDirective,
    NgxMaskPipe,
    FormsModule
  ],
  exports: [
    ListagemFComponent
  ],
  providers: [
    provideNgxMask()
  ]
})
export class ListagemFModule { }