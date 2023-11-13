import { Injectable } from '@angular/core';

import { Pessoa } from 'src/app/shared';

const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})
export class PessoaService {

  constructor() { }

  listarTodosPessoaService(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];
    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserirPessoaService(pessoa: Pessoa): void {
    const pessoas = this.listarTodosPessoaService();
    pessoa.id = new Date().getTime();
    pessoas.push(pessoa);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPorIdPessoaService(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarTodosPessoaService();
    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizarPessoaService(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarTodosPessoaService();
    pessoas.forEach((obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  removerPessoaService(id: number): void {
    let pessoas: Pessoa[] = this.listarTodosPessoaService();
    pessoas = pessoas.filter(pessoa => pessoa.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }
}
