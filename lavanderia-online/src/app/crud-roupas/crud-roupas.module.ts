import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CrudRoupasService } from './services/crud-roupas.service';
import { ListarRoupasComponent } from './listar-roupas/listar-roupas.component';
import { InserirRoupaComponent } from './inserir-roupa/inserir-roupa.component';
import { EditarRoupaComponent } from './editar-roupa/editar-roupa.component';

import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    ListarRoupasComponent,
    InserirRoupaComponent,
    EditarRoupaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    SharedModule
  ],
  providers:[
    CrudRoupasService
  ]
})
export class CrudRoupasModule { }
