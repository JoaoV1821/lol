import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCadastroService } from '../services';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { Cadastro } from 'src/app/shared/models/cadastro.model';
import { Endereco } from 'src/app/shared/models/endereco.model';
import { RequestMaker } from 'src/app/services/requestService';



@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;
  cidade!: any;
  cep!: any;
  complemento!: any;
  endereco!: any;

  constructor(private autoCadastroService: AutoCadastroService) {
    this.pessoa = new Pessoa();
    this.teste();

  }

  ngOnInit(): void {
  }

  async teste() {
    let result = await RequestMaker.getData<String>("/auth/teste");
    if (result.data) {
      console.log(result.data);
    }
  }

  requestCep() {
    let value = this.cep as string
    value.replace('-', '')
    this.autoCadastroService.getCep(this.cep).then((response) => {
      this.cidade = response.data.localidade;
      this.endereco = response.data.logradouro;
      this.complemento = response.data.complemento;
    })
  }

  async realizarCadastro(formulario: NgForm) {
    let dados = formulario.value;
    let endereco = new Endereco(dados.cep, dados.cidade, dados.endereco, dados.numero, dados.complemento);
    let cadastro = new Cadastro(dados.nome, dados.cpf, dados.telefone, dados.email, endereco);
    let result = await RequestMaker.postData("/auth/register", cadastro);
    if (result.error) {
      console.log(result.error);
    } else if (result.data) {
      alert("Cadastro realizado! Sua senha é : " + result.data);
    }
  }
}
