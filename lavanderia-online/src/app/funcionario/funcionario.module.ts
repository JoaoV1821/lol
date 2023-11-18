import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { FuncionarioService } from './services';
import { ListarFuncionarioComponent } from './listar-funcionario';
import { InserirFuncionarioComponent } from './inserir-funcionario';
import { EditarFuncionarioComponent } from './editar-funcionario';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';


@NgModule({
  declarations: [
    ListarFuncionarioComponent,
    InserirFuncionarioComponent,
    EditarFuncionarioComponent,

  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskDirective,
    NgxMaskPipe
  ],
  providers: [
    FuncionarioService,
    provideNgxMask()
  ]
})
export class FuncionarioModule { }
