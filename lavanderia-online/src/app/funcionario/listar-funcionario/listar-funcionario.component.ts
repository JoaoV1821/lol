import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../services';
import { Funcionario } from 'src/app/shared/models/funcionario.model';

@Component({
  selector: 'app-listar-funcionario',
  templateUrl: './listar-funcionario.component.html',
  styleUrls: ['./listar-funcionario.component.css']
})
export class ListarFuncionarioComponent implements OnInit {

  funcionarios: Funcionario[] = [];

  constructor(private funcService: FuncionarioService) {

  }

  ngOnInit(): void {
    this.funcionarios = this.listarFuncionarios();
  }

  listarFuncionarios(): Funcionario[] {
    return this.funcService.listarFuncionarios();
    
    /*
    return [
      new Funcionario("111.111.111-11","Ana", "ana@ufpr.br","123ana","01/01/1991","GERENTE"),
      new Funcionario("222.222.222-222","Bruno", "bruno@ufpr.br","123bruno","02/02/1992","ATENDENTE"),
      new Funcionario("333.333.333-33","Carolina", "carolina@ufpr.br","123carolina","03/03/1993","ENTREGADOR"),
      new Funcionario("444.444.444-44","Diego", "diego@ufpr.br","123diego","04/04/1994","ATENDENTE"),
      new Funcionario("555.555.555-55","Eliane", "eliane@ufpr.br","123eliane","05/05/1995","ATENDENTE"),
      new Funcionario("666.666.666-66","Fernando", "fernando@ufpr.br","123fernando","06/06/1996","ATENDENTE"),
    ]
    */
  }

  removerFuncionario($event: any, funcionario: Funcionario): void {
    $event.preventDefault();

    if (confirm(`Deseja realmente remover o funcionário ${funcionario.nome}?`)){
      this.funcService.removerFuncionario(funcionario.cpf!);
      this.funcionarios = this.listarFuncionarios();
    }
  }
}
