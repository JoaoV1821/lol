import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioService } from '../services';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.css']
})
export class EditarFuncionarioComponent implements OnInit {

  @ViewChild("formFuncionario") formFuncionario!: NgForm;

  funcionario!: Funcionario;

  constructor(
    private funcService: FuncionarioService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  async ngOnInit(): Promise<void> {

    const cpf: string = this.route.snapshot.params['cpf'];
    const response = await this.funcService.buscarFuncionarioPorCPF(cpf);


  }

  atualizarFuncionario(): void {
    if (this.formFuncionario.form.valid) {
      this.funcService.atualizarFuncionario(this.funcionario);
      this.router.navigate(['/funcionario']);
    }
  }

}
