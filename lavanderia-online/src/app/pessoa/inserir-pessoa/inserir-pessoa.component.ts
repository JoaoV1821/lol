import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Pessoa, Usuario } from 'src/app/shared';
import { PessoaService } from '../services';

@Component({
  selector: 'app-inserir-pessoa',
  templateUrl: './inserir-pessoa.component.html',
  styleUrls: ['./inserir-pessoa.component.css']
})
export class InserirPessoaComponent implements OnInit {
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;
  loginService: any;

  constructor(
    private pessoaService: PessoaService,
    private router: Router) { }

  ngOnInit(): void {
    this.pessoa = new Pessoa();
  }

  inserirPessoaComponent(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.inserirPessoaService(this.pessoa);
      this.router.navigate(["/pessoas"]);
    }
  }

}
