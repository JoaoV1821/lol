import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutocadastroService } from './services';

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
    AutocadastroService
  ]
})
export class AutocadastroModule { }
