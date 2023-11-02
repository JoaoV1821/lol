import { JsonPipe } from '@angular/common';
import { Injectable } from '@angular/core';

import { Pessoa } from 'src/app/shared/models/pessoa.model';
import axios from 'axios';
const LS_CHAVE: string = "pessoas";

@Injectable({
  providedIn: 'root'
})


export class AutocadastroService {

  constructor() { }

  listarPessoasService(): Pessoa[] {
    const pessoas = localStorage[LS_CHAVE];

    return pessoas ? JSON.parse(pessoas) : [];
  }

  inserirPessoaService(pessoa: Pessoa): void {
    const pessoas = this.listarPessoasService();

    pessoa.id = new Date().getTime();

    pessoas.push(pessoa);

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  buscarPessoaPorIdService(id: number): Pessoa | undefined {
    const pessoas: Pessoa[] = this.listarPessoasService();

    return pessoas.find(pessoa => pessoa.id === id);
  }

  atualizaPessoaService(pessoa: Pessoa): void {
    const pessoas: Pessoa[] = this.listarPessoasService();

    pessoas.forEach( (obj, index, objs) => {
      if (pessoa.id === obj.id) {
        objs[index] = pessoa
      }
    } );

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  removerPessoaService(id: number): void {
    let pessoas: Pessoa[] = this.listarPessoasService();

    pessoas = pessoas.filter(pessoa => pessoa.id !== id);

    localStorage[LS_CHAVE] = JSON.stringify(pessoas);
  }

  getCep(cep: string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
          "Content-Type": 'application/json'
      }
    })
  }
}
