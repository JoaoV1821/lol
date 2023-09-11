import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { CrudRoupasService } from '../services/crud-roupas.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-roupa',
  templateUrl: './editar-roupa.component.html',
  styleUrls: ['./editar-roupa.component.css']
})
export class EditarRoupaComponent implements OnInit{

  @ViewChild("formRoupa") formRoupa! : NgForm;
  roupa! : Roupa;

  constructor(
    private roupaService : CrudRoupasService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.roupaService.buscarPorId(id);
    if(res !== undefined){
      this.roupa = res;
    }
    else{
      throw new Error ("Roupa não encontrada: id = " + id);
    }
  }

  atualizar() : void {
    if(this.formRoupa.form.valid){
      this.roupaService.atualizar(this.roupa);
      this.router.navigate(['/roupas']);
    }
  }
}
