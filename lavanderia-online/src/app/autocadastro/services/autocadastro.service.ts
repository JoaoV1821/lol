import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';
import { RequestMaker } from 'src/app/services/requestService';
import { Endereco } from 'src/app/shared';
import { FormularioData } from 'src/app/shared/models/formulario-data.model';
import { UserDTO } from 'src/app/shared/models/user-dto.model';

@Injectable({
  providedIn: 'root'
})

export class AutoCadastroService {

  constructor(private router: Router) {
  }



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

  async postUser(data: FormularioData) {
    console.log(data.dataNasc);
    let endereco = new Endereco(data.cep, data.cidade, data.endereco, data.numero, data.complemento);
    let usuario = new UserDTO(data.nome, data.cpf, data.telefone, data.email, data.dataNasc, endereco);
    let response = await RequestMaker.postData<string>("/auth/register", usuario);
    if (response.ok(response.data)) {
      if (confirm("Cliente cadastrado com sucesso!\nSua senha é " + response.data)) {
      }
      this.router.navigate(["/login"]);
    } else {
      alert("Erro ao cadastrar cliente");
    }
  }
}
