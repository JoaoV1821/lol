import { Component, OnInit } from '@angular/core';

import { AutocadastroService } from '../services';

import { Pessoa } from 'src/app/shared/models/pessoa.model';

@Component({
  selector: 'app-listar-clientes',
  templateUrl: './listar-clientes.component.html',
  styleUrls: ['./listar-clientes.component.css']
})

export class ListarClientesComponent implements OnInit {

  pessoas: Pessoa[] = [];
  
  constructor(private autocadatroService: AutocadastroService) { }

  ngOnInit(): void {
    this.pessoas = this.listarClientes();
  }

  listarClientes(): Pessoa[] {
    return this.autocadatroService.listarPessoasService();
  }

  remover($event: any, pessoa: Pessoa): void {
    $event.preventDefault();
    if (confirm(`Deseja remover o cliente ${pessoa.nome}?`)){
      this.autocadatroService.removerPessoaService(pessoa.id!);
      this.pessoas = this.listarClientes();
    }
  }
}
