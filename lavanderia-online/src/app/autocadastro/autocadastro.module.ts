import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AutocadastroComponent } from './autocadastro';
import { AutocadastroService } from './services';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { ListarClientesComponent } from './listar-clientes';
import { EditarClienteComponent } from './editar-cliente';
import { NumericoDirective } from '../shared/directives/numerico.directive';


@NgModule({
  declarations: [
    AutocadastroComponent,
    ListarClientesComponent,
    EditarClienteComponent,
    NumericoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
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
