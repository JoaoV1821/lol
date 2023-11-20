import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestMaker } from 'src/app/services/requestService';
import { Cadastro, Endereco } from 'src/app/shared';

import axios from 'axios';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

const LS_CHAVE: string = "funcionario";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor(private router: Router) {
  }

  async listarFuncionarios(): Promise<Funcionario[] | null> {
    let response = await RequestMaker.getData<Funcionario[]>("/cadastro/get/funcionarios");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return null;
    }

  };

  async inserirFuncionario(func: Funcionario): Promise<void> {
    if (func.nome && func.cpf && func.endereco && func.telefone && func.email) {
      let cadastro = new Cadastro(func.nome, func.cpf, func.telefone, func.email, "funcionario", func.senha, func.dataNasc, func.endereco);
      let response = await RequestMaker.postData("/cadastro/add/cadastro", cadastro);
      if (response.ok(response.data)) {
        this.router.navigate(["/funcionario"]);
      } else {
        alert("Usuario não pode ser inserido!");
      }
    }
  };

  async buscarFuncionarioPorCPF(cpf: string): Promise<Cadastro> {
    let response = await RequestMaker.postData<Cadastro>("/cadastro/get/cadastro", { string: cpf });
    if (response.ok(response.data)) {
      return response.data;
    } else {
      alert("Funcionário não encontrado: cpf = " + cpf);
      throw new Error("Funcionário não encontrado: cpf = " + cpf);
    }
  };


  async atualizarFuncionario(func: Funcionario): Promise<void> {
    let response = await RequestMaker.postData("/cadastro/update/cadastro", func);
    if (response.ok(response.data)) {

    } else {
      alert("Não foi possível atualizar o ")
    }
  }

  async removerFuncionario(cpf: string): Promise<void> {
    let response = await RequestMaker.postData("/cadastro/delete/cadastro", { string: cpf });
    if (!response.ok(response.data)) {
      alert("Não foi possivel deletar o funcionário");
    }
  }

  getCep(cep: string) {
    return axios.get(`https://viacep.com.br/ws/${cep}/json/`, {
      headers: {
        "Content-Type": 'application/json'
      }
    })
  }
}
