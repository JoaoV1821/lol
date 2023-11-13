import { Component, OnInit } from '@angular/core';

import { Cidade } from 'src/app/shared';
import { CidadeService } from '../services';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalCidadeComponent } from '../modal-cidade';

@Component({
  selector: 'app-listar-cidade',
  templateUrl: './listar-cidade.component.html',
  styleUrls: ['./listar-cidade.component.css']
})
export class ListarCidadeComponent implements OnInit {

  cidades: Cidade[] = [];

  constructor(private cidadeService: CidadeService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.cidades = this.listarTodasCidadeComponent();
  }

  listarTodasCidadeComponent(): Cidade[] {
    return this.cidadeService.listarTodasCidadeService();
  }

  remover($event: any, cidade: Cidade): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover a cidade ${cidade.nomeCidade}?`)) {
      this.cidadeService.removerCidadeService(cidade.id!);
      this.cidades = this.listarTodasCidadeComponent();
    }
  }

  abrirModalCidade(cidade: Cidade) {
    const modalRef = this.modalService.open(ModalCidadeComponent);
    modalRef.componentInstance.cidade = cidade;
  }
}
