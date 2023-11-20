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

  async buscarFuncionarioPorCPF(cpf: string): Promise<void> {
    let response = await RequestMaker.postData<Cadastro>("/cadastro/get/cadastro", { cpf: cpf });
    if (response.ok(response.data)) {
      // let funcionario = response.data as Funcionario;
      // return response.data;

    } else {
      throw new Error("Funcionário não encontrado: cpf = " + cpf);
    }
  };

  atualizarFuncionario(func: Funcionario): void {
    // const funcionarios: Funcionario[] = this.listarFuncionarios();
    //
    // funcionarios.forEach((obj, index, objs) => {
    //  if (func.cpf === obj.cpf) {
    //    objs[index] = func
    //  }
    //});

    //localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }

  async removerFuncionario(cpf: string): Promise<void> {
    let response = await RequestMaker.postData("/cadastro/delete/cadastro", { cpf: cpf });
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
