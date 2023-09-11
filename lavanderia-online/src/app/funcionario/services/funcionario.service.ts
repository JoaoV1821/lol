import { Injectable } from '@angular/core';

import { Funcionario } from 'src/app/shared/models/funcionario.model';

const LS_CHAVE: string = "funcionario";

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  constructor() { }

  listarFuncionarios(): Funcionario[] {
    const funcionarios = localStorage[LS_CHAVE];
    return funcionarios ? JSON.parse(funcionarios) : [];
  };

  inserirFuncionario(func: Funcionario): void {
    const funcionarios = this.listarFuncionarios();

    funcionarios.push(func);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  };

  buscarFuncionarioPorCPF(cpf: string): Funcionario | undefined {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    return funcionarios.find(funcionario => funcionario.cpf === cpf);
  };

  atualizarFuncionario(func: Funcionario): void {
    const funcionarios: Funcionario[] = this.listarFuncionarios();

    funcionarios.forEach( (obj, index, objs) => {
      if( func.cpf === obj.cpf){
        objs[index] = func
      }
    } );

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }

  removerFuncionario(cpf: string): void {
    let funcionarios: Funcionario[] = this.listarFuncionarios();

    funcionarios = funcionarios.filter(funcionario => funcionario.cpf !== cpf);

    localStorage[LS_CHAVE] = JSON.stringify(funcionarios);
  }

}
