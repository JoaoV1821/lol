import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/shared/models/usuario.model';
import { Login } from 'src/app/shared/models/login.model';
import { RequestMaker } from 'src/app/services/requestService';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private router: Router) { }

  async login(login: Login) {
    let response = await RequestMaker.postData<Usuario>("/auth/login", login);
    if (response.error) {
      alert(response.error.message);
    } else if (response.data) {
      if(response.data.perfil == "admin"){
        this.router.navigate(["/pagina-inicial"])
      }else{
        this.router.navigate(["/orcamento"]);
      
       
      }
    }
  }
}
