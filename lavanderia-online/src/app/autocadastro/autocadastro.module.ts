import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutoCadastroService } from './services';

@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    AutocadastroComponent
  ],
  providers: [
    AutoCadastroService
  ]
})
export class AutocadastroModule { }
