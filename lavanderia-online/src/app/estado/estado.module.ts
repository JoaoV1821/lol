import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { EstadoService } from './services';
import { EditarEstadoComponent } from './editar-estado';
import { InserirEstadoComponent } from './inserir-estado';
import { ListarEstadoComponent } from './listar-estado';
import { ModalEstadoComponent } from './modal-estado';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    EditarEstadoComponent,
    InserirEstadoComponent,
    ListarEstadoComponent,
    ModalEstadoComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule
  ],
  providers: [
    EstadoService
  ]
})
export class EstadoModule { }
