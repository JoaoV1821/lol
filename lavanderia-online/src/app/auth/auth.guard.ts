import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private loginService: LoginService,
    private router: Router
  ) { }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> |
    Promise<boolean | UrlTree> | boolean | UrlTree {

    const usuarioLogado = this.loginService.getUsuario();
    //const usuarioLogado = this.loginService.usuarioLogado;
    let url = state.url;
    //console.log(usuarioLogado);
    if (usuarioLogado) {
      console.log(usuarioLogado.perfil);
      console.log(usuarioLogado);
      if (route.data?.['role'] && route.data?.['role'].indexOf(usuarioLogado.perfil.toUpperCase()) === -1) {
        // Se o perfil do usuário não está no perfil da rota
        // vai para login
        console.log("erro1");
        console.log(route.data?.['role']);
        this.router.navigate(['/login'],
          { queryParams: { error: "Proibido o acesso a " + url } });
        return false;
      }
      // em qualquer outro caso, permite o acesso
      return true;
    }
    // Se não está logado, vai para login

    console.log("erro2");
    this.router.navigate(['/login'],
      {
        state: {
          "mensagem": "Usuario precisa estar logado",
        }
      });
    return false;
  }
}