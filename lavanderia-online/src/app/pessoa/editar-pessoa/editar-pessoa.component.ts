import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoa } from 'src/app/shared';
import { PessoaService } from '../services';

@Component({
  selector: 'app-editar-pessoa',
  templateUrl: './editar-pessoa.component.html',
  styleUrls: ['./editar-pessoa.component.css']
})
export class EditarPessoaComponent implements OnInit {
  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;
  valorMinimo: any;

  constructor(
    private pessoaService: PessoaService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.pessoaService.buscarPorIdPessoaService(id);
    if (res !== undefined)
      this.pessoa = res;
    else
      throw new Error("Pessoa não encontrada: id = " + id);
  }

  atualizarPessoaComponent(): void {
    if (this.formPessoa.form.valid) {
      this.pessoaService.atualizarPessoaService(this.pessoa);
      this.router.navigate(['/pessoas']);
    }
  }
}
