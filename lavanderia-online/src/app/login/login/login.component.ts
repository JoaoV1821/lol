import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services';
import { NgForm } from '@angular/forms';
import { postData } from 'src/app/services/axiosService';


class Login{
  login:string;
  password:string;
  constructor(login:string,password:string){
    this.login = login;
    this.password = password;
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor() {

  }

  ngOnInit(): void {
    
  }

  pegarDadosFormulario(formulario : NgForm){
      let dados = formulario.value;
      console.log(dados);
      let login : Login = new Login(dados.username,dados.password);
      let response = postData("/auth/login",login);
      if(response != null){
        response.subscribe((value)=>{
            console.log(value);
            if(value == "404"){
              console.log("Login falhou!");
            }
        })
      }
  }
}
