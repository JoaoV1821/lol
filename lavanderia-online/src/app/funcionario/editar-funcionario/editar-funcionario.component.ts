import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/shared';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  @ViewChild("formFuncionario") formFuncionario!: NgForm;
  cidade!: any;
  cep!: any;
  complemento!: any;
  endereco!: any;

  funcionario: Funcionario = new Funcionario("", "", "", "", "", new Endereco("", "", "", "", ""), "");

  constructor(
    private funcService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

    const cpf: string = this.route.snapshot.params['cpf'];
    const data = await this.funcService.buscarFuncionarioPorCPF(cpf);
    this.funcionario = new Funcionario(data.cpf, data.nome, data.dataNasc, data.email, data.senha, data.endereco, data.telefone);
    console.log(this.funcionario);
  }

  atualizarFuncionario(): void {

    this.funcService.atualizarFuncionario(this.funcionario);
    //this.router.navigate(['/funcionario']);

  }

  async requestCep() {

    console.log()

    await this.funcService.getCep('83045100').then((response) => {
      let data = response.data;
      this.funcionario.endereco.cep = data.cep;
      this.funcionario.endereco.cidade = data.localidade;
      this.funcionario.endereco.complemento = data.complemento;
      this.funcionario.endereco.endereco = data.logradouro;
      this.funcionario.endereco.numero = data.siafi;
    }).catch((error) => {
      console.log(error.menssage);
    })
  }

}
