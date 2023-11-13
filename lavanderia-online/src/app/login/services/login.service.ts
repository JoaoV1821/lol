import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';
import { RequestMaker } from 'src/app/services/requestService';
import { Router } from '@angular/router';
import { LoginComponent } from '../login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  async login(login: Login, loginComponent: LoginComponent) {
    let response = await RequestMaker.postData<Usuario>("/auth/login", login);
    if (response.error) {
      if (response.status == 401) {
        loginComponent.setErro(true);
      }
    } else if (response.data) {
      this.navigateAfterLogin(response.data);
    }
  }

  async checkIfLogged() {
    let response = await RequestMaker.getData<Usuario>("/auth/testLogin");
    if (response.status != 401 && response.data) {
      this.navigateAfterLogin(response.data)
    }
  }

  private navigateAfterLogin(usuario: Usuario) {
    if (usuario.perfil == "admin") {
      this.router.navigate(["/orcamento"]);
    } else {
      this.router.navigate(["/pagina-inicial"])
    }
  }

}
