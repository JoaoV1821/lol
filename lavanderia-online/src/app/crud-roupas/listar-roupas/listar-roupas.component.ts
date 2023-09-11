import { Component, OnInit } from '@angular/core';

import { CrudRoupasService } from '../services/crud-roupas.service';
import { Roupa } from 'src/app/shared/models/roupa.model';

@Component({
  selector: 'app-listar-roupas',
  templateUrl: './listar-roupas.component.html',
  styleUrls: ['./listar-roupas.component.css']
})

export class ListarRoupasComponent implements OnInit {

  roupas : Roupa[] = [];

  constructor(private roupaService : CrudRoupasService){ }
  ngOnInit(): void {
    this.roupas = this.listarTodos();
  }

  listarTodos() : Roupa[]{
    return this.roupaService.listarTodos();
  }

  remover($event : any, roupa : Roupa) : void{
    $event.preventDefault();
    if(confirm(`Deseja remover a roupa ${roupa.nome}?`)){
      this.roupaService.remover(roupa.id!);
      this.roupas = this.listarTodos();
    }
  }
}
