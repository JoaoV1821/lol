import { Injectable } from '@angular/core';
import axios from 'axios';
import { FormularioData } from 'src/app/shared/models/formulario-data.model';
import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Injectable({
  providedIn: 'root'
})

export class AutoCadastroService {

  constructor() { }



  getCep(cep: string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-Type": 'application/json'
      }
    })
  }

  private validateTel(tel: string): string {
    switch (tel.length) {

    }
    console.log(tel.length);
    return tel;
  }

  validadeFormulario(dados: FormularioData) {
    this.validateTel(dados.telefone);
    return dados;
  }
}
