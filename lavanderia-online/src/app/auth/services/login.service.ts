import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';
import { RequestMaker, RequestResult } from 'src/app/services/requestService';
import { Router } from '@angular/router';
import { LoginComponent } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  async login(login: Login, loginComponent: LoginComponent) {
    login.login = (login.login || '').toLowerCase();
    let response = await RequestMaker.postData<Usuario>("/auth/login", login);
    if (response.ok(response.data)) {
      let usuario = response.data;
      localStorage["user"] = JSON.stringify(usuario);
      this.navigateAfterLogin(response.data);
    } else {
      loginComponent.setErro(true);
    }
  }

  async checkIfLogged() {
    let usuario = this.procurarNoLocalStorage();
    if (usuario != null) {
      this.navigateAfterLogin(usuario);
      return;
    }
    let response = await RequestMaker.getData<Usuario>("/auth/testLogin"); // axios 1s 2s 10-s
    if (response.ok(response.data)) {
      this.navigateAfterLogin(response.data);
    }
  }

  usuarioLogado(): boolean {
    if (this.getUsuario() == null) {
      return false;
    }
    return true;
  }

  getUsuario(): Usuario | null {
    let usuario = this.procurarNoLocalStorage();
    if (usuario != null) {
      return usuario;
    }
    // let response = await RequestMaker.getData<Usuario>("/auth/testLogin");
    ////  if (response.ok(response.data)) {
    //     return response.data;
    //   }
    return null;
  }


  private procurarNoLocalStorage(): Usuario | null {
    let LS_CHAVE: string = "user";
    let result: string | undefined | null = localStorage[LS_CHAVE];
    if (result != undefined || result != null) {
      let usuario: Usuario = JSON.parse(result);
      return usuario;
    }
    return null;
  }

  private navigateAfterLogin(usuario: Usuario) {
    if (usuario.perfil == "cliente") {
      this.router.navigate(["/seus-pedidos"]);
    } else {
      this.router.navigate(["/home-funcionario"])
    }
  }

  public logout() {
    localStorage.clear();
    RequestMaker.getData("/api/auth/logout");
  }

}
