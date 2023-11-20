import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCadastroService } from '../services';

import { RequestMaker } from 'src/app/services/requestService';
import { NgxMaskDirective } from 'ngx-mask';
import { Endereco, Cadastro, FormularioData } from 'src/app/shared/models';



@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css'],
})
export class AutocadastroComponent implements OnInit {

  @ViewChild('formPessoa') formPessoa!: NgForm;
  cidade!: any;
  cep!: any;
  complemento!: any;
  endereco!: any;

  constructor(private autoCadastroService: AutoCadastroService) {

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
    let dados: FormularioData = formulario.value;
    dados = this.autoCadastroService.validadeFormulario(dados);
    this.autoCadastroService.postUser(dados);
  }

}
