import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { CrudRoupasService } from '../services/crud-roupas.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Interface } from 'readline';
import { Categoria } from 'src/app/shared/models/categoria.model';

export interface roupaFormulario {
  nome: string,
  prazo: number,
  preco: number
}


@Component({
  selector: 'app-editar-roupa',
  templateUrl: './editar-roupa.component.html',
  styleUrls: ['./editar-roupa.component.css']
})
export class EditarRoupaComponent implements OnInit {

  @ViewChild("formRoupa") formRoupa!: NgForm;
  roupa!: Roupa;
  categorias!: Categoria[];
  constructor(
    private roupaService: CrudRoupasService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {
    this.categorias = await this.roupaService.getCategorias();
    let id = +this.route.snapshot.params['id'];
    const roupa = await this.roupaService.buscarPorId(id);
    if (roupa !== null) {
      this.roupa = roupa;
    }
    else {
      throw new Error("Roupa não encontrada: id = " + id);
    }
  }


  atualizar(formulario: NgForm): void {

    let roupa: roupaFormulario = this.formRoupa.value as roupaFormulario;

    //this.roupaService.atualizar(roupa);
    //this.router.navigate(['/roupas']);

  }
}
