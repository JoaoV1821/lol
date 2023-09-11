import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Roupa } from 'src/app/shared/models/roupa.model';
import { CrudRoupasService } from '../services/crud-roupas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-roupa',
  templateUrl: './inserir-roupa.component.html',
  styleUrls: ['./inserir-roupa.component.css']
})
export class InserirRoupaComponent {
  @ViewChild('formRoupa') formRoupa! : NgForm;
  roupa! : Roupa;

  constructor(
    private roupaService : CrudRoupasService,
    private router : Router
  ) {}

  ngOnInit() : void{
    this.roupa = new Roupa();
  }

  inserir() : void {
    if(this.formRoupa.form.valid){
      this.roupaService.inserir(this.roupa);
      this.router.navigate(["/roupas"]);
    }
  }
}
