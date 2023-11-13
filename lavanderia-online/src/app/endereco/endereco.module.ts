import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EnderecoService } from './services';
import { EditarEnderecoComponent } from './editar-endereco';
import { InserirEnderecoComponent } from './inserir-endereco';
import { ListarEnderecoComponent } from './listar-endereco';
import { ModalEnderecoComponent } from './modal-endereco';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';

export const options: Partial<IConfig> | (() => Partial<IConfig>) = {};

@NgModule({
  declarations: [
    EditarEnderecoComponent,
    InserirEnderecoComponent,
    ListarEnderecoComponent,
    ModalEnderecoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    EnderecoService
  ]
})
export class EnderecoModule { }
