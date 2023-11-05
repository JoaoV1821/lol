import { Component, OnInit } from '@angular/core';

import { LoginService } from '../services';
import { NgForm } from '@angular/forms';
import { postData } from 'src/app/services/axiosService';
import { Router } from '@angular/router';
import { Login } from 'src/app/shared/models/login.model';






@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) {

  }

  ngOnInit(): void {

  }

  pegarDadosFormulario(formulario: NgForm) {
    let dados = formulario.value;
    let login: Login = new Login(dados.username, dados.password);
    this.loginService.login(login);
  }
}
