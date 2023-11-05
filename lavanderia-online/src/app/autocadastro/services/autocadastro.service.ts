import { Injectable } from '@angular/core';
import axios from 'axios';
import { Pessoa } from 'src/app/shared/models/pessoa.model';
import { getData } from 'src/app/services/axiosService';

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
}
