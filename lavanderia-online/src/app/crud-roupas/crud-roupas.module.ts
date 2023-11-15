import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { CrudRoupasService } from './services';
import { ListarRoupasComponent } from './listar-roupas';
import { InserirRoupaComponent } from './inserir-roupa';
import { EditarRoupaComponent } from './editar-roupa';

@NgModule({
  declarations: [
    ListarRoupasComponent,
    InserirRoupaComponent,
    EditarRoupaComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  providers: [
    CrudRoupasService
  ]
})
export class CrudRoupasModule { }
