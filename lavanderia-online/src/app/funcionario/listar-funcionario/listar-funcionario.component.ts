import { Component, OnInit } from '@angular/core';

import { FuncionarioService } from '../services';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { RequestMaker } from 'src/app/services/requestService';

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
    this.getFuncionarios();
  }

  removerFuncionario($event: any, funcionario: Funcionario): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o funcionário ${funcionario.nome}?`)) {
      this.funcService.removerFuncionario(funcionario.cpf!);
      this.getFuncionarios();
    }
  }

  private async getFuncionarios() {
    let resultado = await this.funcService.listarFuncionarios();
    if (resultado != null) {
      this.funcionarios = resultado;
    }
  }
}
