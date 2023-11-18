import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { RequestMaker } from 'src/app/services/requestService';
import { Cadastro, Endereco } from 'src/app/shared';

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
      let cadastro = new Cadastro(func.nome, func.cpf, func.telefone, func.email, func.endereco);
      let response = await RequestMaker.postData("/cadastro/add/cadastro", cadastro);
      if (response.ok(response.data)) {
        this.router.navigate(["/funcionario"]);
      } else {
        alert("Usuario não pode ser inserido!");
      }
    }
  };

  buscarFuncionarioPorCPF(cpf: string): Funcionario | undefined {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    return funcionarios.find(funcionario => funcionario.cpf === cpf);
  };

  atualizarFuncionario(func: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    funcionarios.forEach((obj, index, objs) => {
      if (func.cpf === obj.cpf) {
        objs[index] = func
      }
    });

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }

  async removerFuncionario(cpf: string): Promise<void> {
    let resultado = await this.listarFuncionarios();
    let funcionarios: Funcionario[];
    if (resultado != null) {
      funcionarios = resultado;
      let func: Funcionario | undefined = funcionarios.find((func) => func.cpf === cpf);
      funcionarios = funcionarios.filter(funcionario => funcionario.cpf !== cpf);
      if (func != undefined) {
        RequestMaker.postData("/cadastro/delete/cadastro", { cpf: func.cpf })
      }
    }


  }

}
