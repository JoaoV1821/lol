import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { PessoaService } from 'src/app/pessoa';
import { Login, Usuario, Pessoa } from 'src/app/shared';

const LS_CHAVE: string = "usuarioLogado";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private pessoaService: PessoaService) { }

  public get usuarioLogado(): Usuario | null {
    let usu = localStorage[LS_CHAVE];
    return usu ? JSON.parse(localStorage[LS_CHAVE]) : null;
  }

  public set usuarioLogado(usuario: Usuario | null) {
    if (usuario) {
      localStorage[LS_CHAVE] = JSON.stringify(usuario);
    } else {
      delete localStorage[LS_CHAVE];
    }
  }

  logout() {
    this.usuarioLogado = null;
  }

  login(login: Login): Observable<Usuario | null> {
    const email = (login.login || '').toLowerCase();

    const pessoasCadastradas = this.pessoaService.listarTodosPessoaService();

    const pessoaCadastrada = pessoasCadastradas.find(pessoa => pessoa.email === email);

    if (pessoaCadastrada && pessoaCadastrada.senha === login.senha) {
      const usuarioLogado = new Usuario(
        pessoaCadastrada.id,
        pessoaCadastrada.nome,
        pessoaCadastrada.email,
        pessoaCadastrada.senha,
        pessoaCadastrada.perfil
      );

      this.usuarioLogado = usuarioLogado;
      return of(usuarioLogado);
    } else {
      return of(null);
    }
  }
}
