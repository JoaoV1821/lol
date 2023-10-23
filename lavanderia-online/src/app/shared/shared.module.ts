import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MinimoValidatorDirective, NumericoDirective, ObrigatorioDirective, StringOnlyDirective } from './directives';



@NgModule({
  declarations: [
    NumericoDirective,
    StringOnlyDirective,
    ObrigatorioDirective,
    MinimoValidatorDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NumericoDirective,
    StringOnlyDirective,
    ObrigatorioDirective,
    MinimoValidatorDirective
  ]
})
export class SharedModule { }
