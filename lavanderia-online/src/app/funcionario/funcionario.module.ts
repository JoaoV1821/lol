import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncionarioService } from './services';
import { ListarFuncionarioComponent } from './listar-funcionario';
import { InserirFuncionarioComponent } from './inserir-funcionario';
import { EditarFuncionarioComponent } from './editar-funcionario';
// import { NumericoDirective } from '../shared/directives/numerico.directive';


@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    InserirFuncionarioComponent,
    EditarFuncionarioComponent,
    // NumericoDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
  ],
  providers: [
    FuncionarioService
  ]
})
export class FuncionarioModule { }
