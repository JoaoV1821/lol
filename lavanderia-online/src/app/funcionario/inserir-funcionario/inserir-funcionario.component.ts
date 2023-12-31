import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Funcionario } from 'src/app/shared/models/funcionario.model';
import { FuncionarioService } from '../services';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inserir-funcionario',
  templateUrl: './inserir-funcionario.component.html',
  styleUrls: ['./inserir-funcionario.component.css']
})


export class InserirFuncionarioComponent implements OnInit {
  
  @ViewChild('formFuncionario') formFuncionario! : NgForm;
  
  funcionario! : Funcionario;
  
  constructor(
    private funcService: FuncionarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.funcionario = new Funcionario();
    
  }

  inserirFuncionario(): void {
    if (this.formFuncionario.form.valid) {
      this.funcService.inserirFuncionario(this.funcionario);
      this.router.navigate(["/funcionarios"]);
    }
  }
}
