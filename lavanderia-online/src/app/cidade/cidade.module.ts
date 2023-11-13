import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CidadeService } from './services';
import { EditarCidadeComponent } from './editar-cidade';
import { InserirCidadeComponent } from './inserir-cidade';
import { ListarCidadeComponent } from './listar-cidade';
import { ModalCidadeComponent } from './modal-cidade';

import { NgxMaskModule, IConfig } from 'ngx-mask'
import { SharedModule } from '../shared';
import { NgSelectModule } from '@ng-select/ng-select';

@NgModule({
  declarations: [
    EditarCidadeComponent,
    InserirCidadeComponent,
    ListarCidadeComponent,
    ModalCidadeComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    NgxMaskModule.forRoot(),
    SharedModule,
    NgSelectModule
  ],
  providers: [
    CidadeService
  ]
})
export class CidadeModule { }
