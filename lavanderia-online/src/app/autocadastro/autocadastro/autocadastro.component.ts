import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { AutocadastroService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})

export class AutocadastroComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;
  
  constructor(
    private autocadastroService: AutocadastroService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  inserirPessoaComponent(): void {
    if (this.formPessoa.form.valid) {
      this.autocadastroService.inserirPessoaService(this.pessoa);
      this.router.navigate(['/orcamento']);
    }
  }
}
