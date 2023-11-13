import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { PessoaService } from './services';
import { EditarPessoaComponent } from './editar-pessoa';
import { InserirPessoaComponent } from './inserir-pessoa';
import { ListarPessoaComponent } from './listar-pessoa';
import { ModalPessoaComponent } from './modal-pessoa';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    EditarPessoaComponent,
    InserirPessoaComponent,
    ListarPessoaComponent,
    ModalPessoaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,

  ],
  providers: [
    PessoaService
  ]
})
export class PessoaModule { }
