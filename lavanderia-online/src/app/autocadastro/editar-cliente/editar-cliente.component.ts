import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { AutocadastroService } from '../services';

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})

export class EditarClienteComponent implements OnInit {

  @ViewChild("formPessoa") formPessoa!: NgForm;
  pessoa!: Pessoa;

  constructor(
    private autocadatroService: AutocadastroService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    
    const res = this.autocadatroService.buscarPessoaPorIdService(id);

    if (res !== undefined) {
      this.pessoa = res;
    } else {
      throw new Error ("Cliente não encontrado: id = " + id);
    }
  }

  atualizar(): void {
    if (this.formPessoa.form.valid) {
      this.autocadatroService.atualizaPessoaService(this.pessoa);
      this.router.navigate(['/clientes']);
    }
  }
}
