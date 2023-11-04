import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ViewChild } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AutoCadastroService } from '../services';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { postData } from 'src/app/services/axiosService';
import { Cadastro } from 'src/app/shared/models/cadastro.model';
import { Endereco } from 'src/app/shared/models/endereco.model';


@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  
  @ViewChild('formPessoa') formPessoa!: NgForm;
  pessoa!: Pessoa;
  cidade! : any;
  cep! : any;
  complemento! : any;
  endereco! : any;
  
  constructor(private autoCadastroService : AutoCadastroService) {
    this.pessoa = new Pessoa();
  } 

  ngOnInit(): void {
  }

  requestCep() {
      let value = this.cep as string
      value.replace('-','')
      this.autoCadastroService.getCep(this.cep).then((response) => {
      this.cidade = response.data.localidade;
      this.endereco = response.data.logradouro;
      this.complemento = response.data.complemento;
    })
  }

  realizarCadastro(formulario: NgForm){
    let dados = formulario.value;
    console.log(dados);
    let endereco = new Endereco(dados.cep,dados.cidade,dados.endereco,dados.numero,dados.complemento);
    let cadastro = new Cadastro(dados.nome,dados.cpf,dados.telefone,dados.email,endereco);
    let result =  postData("/auth/register",cadastro);
    if(result != null){
      result.subscribe((value)=>{
          console.log(value);  
      })
    }
  }
}
