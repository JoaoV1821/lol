import { Component, OnInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { AutocadastroService } from '../services/autocadastro.service';
import { NgForm } from '@angular/forms';
import { postData } from 'src/app/services/axiosService';


class Endereco{
  cep: string
  cidade : string
  endereco : string
  numero : string
  complemento : string
  constructor(cep:string,cidade:string,endereco:string,numero:string,complemento:string){
    this.cep = cep;
    this.cidade = cidade;
    this.endereco = endereco;
    this.numero = numero;
    this.complemento = complemento
  }
}

class Cadastro {
  nome:string
  cpf : string
  telefone : string
  email : string
  endereco : Endereco
  constructor(nome:string,cpf:string,telefone:string,email:string,endereco:Endereco){
    this.nome = nome;
    this.cpf = cpf;
    this.telefone = telefone;
    this.email = email;
    this.endereco = endereco;
  }
}

@Component({
  selector: 'app-autocadastro',
  templateUrl: './autocadastro.component.html',
  styleUrls: ['./autocadastro.component.css']
})
export class AutocadastroComponent implements OnInit {
  @ViewChild("cep") cep: any
  @ViewChild("cidade") cidade: any
  @ViewChild("complemento") complemento: any
  @ViewChild("endereco") endereco: any

  
  constructor(private AutocadastroService: AutocadastroService,
    
    ) {

  }
  ngOnInit(): void {
    
  }
  requestCep() {
    this.AutocadastroService.getCep(this.cep.nativeElement.value).then((response) => {
      this.cidade.nativeElement.value =  response.data.localidade;
      this.endereco.nativeElement.value =  response.data.logradouro;
      this.complemento.nativeElement.value =  response.data.complemento;
      this.cep.nativeElement.value = this.cep.nativeElement.value;
    })

  }

  realizarCadastro(formulario: NgForm){
    let dados = formulario.value;
    let endereco = new Endereco(dados.cep,dados.cidade,dados.endereco,dados.numero,dados.complemento);
    let cadastro = new Cadastro(dados.nome,dados.cpf,dados.telefone,dados.email,endereco);
    let result = postData("/auth/register",cadastro);
    if(result != null){
      result.subscribe((value)=>{
          console.log(value);  
          console.log("HEYHA");  
      })
    } 
  }
}
