import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { CrudRoupasService } from '../services/crud-roupas.service';
import { Router } from '@angular/router';
import { NgFor } from '@angular/common';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { RoupaDTO } from 'src/app/shared/models/roupa-dto.model';

@Component({
  selector: 'app-inserir-roupa',
  templateUrl: './inserir-roupa.component.html',
  styleUrls: ['./inserir-roupa.component.css']
})
export class InserirRoupaComponent {
  @ViewChild('formRoupa') formRoupa!: NgForm;
  roupa!: Roupa;
  categorias!: Categoria[];

  constructor(
    private roupaService: CrudRoupasService,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.roupa = new Roupa(0, "", 0, "", "", 0);
    this.categorias = await this.roupaService.getCategorias();
  }

  inserir(formulario: NgForm): void {
    let dados = formulario.value;
    let roupa: RoupaDTO = new RoupaDTO(dados.preco, dados.prazo, dados.categoria, dados.nome);
    if (this.formRoupa.form.valid) {
      this.roupaService.inserir(roupa);
      this.router.navigate(["/roupas"]);
    }
  }
}
