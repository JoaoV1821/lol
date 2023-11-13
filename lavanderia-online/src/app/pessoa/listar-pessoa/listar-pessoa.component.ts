import { Component, OnInit } from '@angular/core';

import { PessoaService } from '../services';
import { Pessoa, Usuario } from 'src/app/shared';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPessoaComponent } from '../modal-pessoa/modal-pessoa.component';

@Component({
  selector: 'app-listar-pessoa',
  templateUrl: './listar-pessoa.component.html',
  styleUrls: ['./listar-pessoa.component.css']
})
export class ListarPessoaComponent implements OnInit {
  
  ordenacaoCrescente: boolean = true;
  pessoas: Pessoa[] = [];
  loginService: any;

  constructor(private pessoaService: PessoaService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.pessoas = this.listarTodosPessoaComponent();
    this.ordenarPessoa();
  }

  listarTodosPessoaComponent(): Pessoa[] {
    return this.pessoaService.listarTodosPessoaService();
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a pessoa ${pessoa.nome}?`)) {
      this.pessoaService.removerPessoaService(pessoa.id!);
      this.pessoas = this.listarTodosPessoaComponent();
    }
  }

  abrirModalPessoa(pessoa: Pessoa) {
    const modalRef = this.modalService.open(ModalPessoaComponent);
    modalRef.componentInstance.pessoa = pessoa;
  }

  ordenarPorId(): void {
    this.pessoas.sort((a, b) => {
      const idA = a.id || 0;
      const idB = b.id || 0;
  
      if (this.ordenacaoCrescente) {
        return idA - idB;
      } else {
        return idB - idA;
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }

  ordenarPessoa(): void {
    this.pessoas.sort((a, b) => {
      const nomeA = a?.nome?.toUpperCase() || '';
      const nomeB = b?.nome?.toUpperCase() || '';

      if (this.ordenacaoCrescente) {
        return nomeA.localeCompare(nomeB);
      } else {
        return nomeB.localeCompare(nomeA);
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }

  ordenarPorDataNascimento(): void {
    this.pessoas.sort((a, b) => {
      const dataNascimentoA = new Date(a.dataNascimento || '');
      const dataNascimentoB = new Date(b.dataNascimento || '');
  
      if (this.ordenacaoCrescente) {
        return dataNascimentoA.getTime() - dataNascimentoB.getTime();
      } else {
        return dataNascimentoB.getTime() - dataNascimentoA.getTime();
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }
}
