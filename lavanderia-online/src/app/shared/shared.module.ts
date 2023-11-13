import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlfabeticoPTBRDirective, MeuNumericoDirective, MinimoValidatorDirective, MinimoValidatorParametroDirective, NumericoDirective } from './directives';
import { MeuPipePipe } from './pipes';



@NgModule({
  declarations: [
    NumericoDirective,
    MeuNumericoDirective,
    AlfabeticoPTBRDirective,
    MinimoValidatorDirective,
    MinimoValidatorParametroDirective,
    MeuPipePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericoDirective,
    MeuNumericoDirective,
    AlfabeticoPTBRDirective,
    MinimoValidatorDirective,
    MinimoValidatorParametroDirective,
    MeuPipePipe
  ]
})
export class SharedModule { }
