import { Component, OnInit } from '@angular/core';

import { CrudRoupasService } from '../services/crud-roupas.service';
import { Roupa } from 'src/app/shared/models/roupa.model';

@Component({
  selector: 'app-listar-roupas',
  templateUrl: './listar-roupas.component.html',
  styleUrls: ['./listar-roupas.component.css']
})

export class ListarRoupasComponent implements OnInit {

  roupas: Roupa[] = [];

  constructor(private roupaService: CrudRoupasService) { }
  async ngOnInit(): Promise<void> {
    this.roupas = await this.roupaService.getRoupas();
  }


  async remover($event: any, roupa: Roupa): Promise<void> {
    $event.preventDefault();
    if (confirm(`Deseja remover a roupa ${roupa.descricao}?`)) {
      await this.roupaService.remover(Roupa.getNumberAsString(roupa.numero));
      this.roupas = await this.roupaService.getRoupas();
    }
  }
}
