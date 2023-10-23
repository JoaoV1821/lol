import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { AutocadastroService } from './services';


@NgModule({
  declarations: [
    AutocadastroComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
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
