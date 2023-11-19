import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioService } from '../services';
import { Router } from '@angular/router';
import { FormularioFuncionario } from 'src/app/shared/models/formulario-funcionario.model';
import { Endereco } from 'src/app/shared';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})
export class InserirFuncionarioComponent implements OnInit {

  @ViewChild('formFuncionario') formFuncionario!: NgForm;

  funcionario!: Funcionario;
  constructor(
    private funcService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    let dados = {
      cep: "88110-609",
      cidade: "cidade1",
      endereco: "endereco1",
      numero: "numero123",
      complemento: "complement123",
      cpf: "866.568.810-25",
      nome: "nome1",
      dataNasc: "12032021",
      email: "email2@email.com",
      senha: "1234",
      telefone: "32120398"
    }
    let endereco = new Endereco(dados.cep, dados.cidade, dados.endereco, dados.numero, dados.complemento);
    let funcionario = new Funcionario(dados.cpf, dados.nome, dados.dataNasc, dados.email, dados.senha, endereco, dados.telefone);
  }

  inserirFuncionario(formulario: NgForm): void {
    let dados: FormularioFuncionario = formulario.value
    let endereco = new Endereco(dados.cep, dados.cidade, dados.endereco, dados.numero, dados.complemento);
    let funcionario = new Funcionario(dados.cpf, dados.nome, dados.dataNasc, dados.email, dados.senha, endereco, dados.telefone);
    if (this.formFuncionario.form.valid) {
      this.funcService.inserirFuncionario(funcionario);
    }
  }
}
