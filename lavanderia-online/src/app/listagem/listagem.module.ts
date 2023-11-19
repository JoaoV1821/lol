import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgSwitch } from '@angular/common';
import { ListagemComponent } from './listagem/listagem.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';
import { Format } from '../shared/pipes/format';
@NgModule({
  declarations: [
    ListagemComponent,

  ],
  imports: [
    CommonModule,
    Format,
    NgxMaskDirective,
    NgxMaskPipe,
    NgSwitch,

  ],
  exports: [
    ListagemComponent
  ],
  providers: [
    provideNgxMask(),
  ]
})
export class ListagemModule { }