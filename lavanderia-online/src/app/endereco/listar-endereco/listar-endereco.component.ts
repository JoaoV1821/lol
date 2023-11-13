import { Component, OnInit } from '@angular/core';

import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEnderecoComponent } from '../modal-endereco';

@Component({
  selector: 'app-listar-endereco',
  templateUrl: './listar-endereco.component.html',
  styleUrls: ['./listar-endereco.component.css']
})
export class ListarEnderecoComponent implements OnInit {

  ordenacaoCrescente: boolean = true;
  enderecos: Endereco[] = [];

  constructor(private enderecoService: EnderecoService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.enderecos = this.listarTodosEnderecoComponent();
  }

  listarTodosEnderecoComponent(): Endereco[] {
    return this.enderecoService.listarTodosEnderecoService();
  }

  remover($event: any, endereco: Endereco): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o endereco ${endereco.logradouro}, ${endereco.logNumero}?`)) {
      this.enderecoService.removerEnderecoService(endereco.id!);
      this.enderecos = this.listarTodosEnderecoComponent();
    }
  }

  abrirModalEndereco(endereco: Endereco) {
    const modalRef = this.modalService.open(ModalEnderecoComponent);
    modalRef.componentInstance.endereco = endereco;
  }

  ordenarCidade(): void {
    this.enderecos.sort((a, b) => {
      const cidadeA = a?.cidade?.toUpperCase() || '';
      const cidadeB = b?.cidade?.toUpperCase() || '';

      if (this.ordenacaoCrescente) {
        return cidadeA.localeCompare(cidadeB);
      } else {
        return cidadeB.localeCompare(cidadeA);
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }
}
