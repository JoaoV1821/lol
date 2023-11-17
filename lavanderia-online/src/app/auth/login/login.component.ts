import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  erro = false
  mensagem = "Usuário ou senha incorretos!";
  usuario?: string
  senha?: string
  login?: Login

  constructor(private loginService: LoginService, private router: Router) {
    let value = this.router.getCurrentNavigation()?.extras.state;
    if (value != undefined) {
      this.erro = true;
      this.mensagem = value["mensagem"];
    }
  }

  ngOnInit(): void {
    this.loginService.checkIfLogged();
  }

  pegarDadosFormulario(formulario: NgForm) {
    if (formulario.form.valid) {
      let dados = formulario.value;
      let login: Login = new Login(dados.username, dados.password);
      this.loginService.login(login, this);
    } else {
      this.erro = true;
    }
  }

  setErro(valor: boolean) {
    this.erro = valor;
  }
}
