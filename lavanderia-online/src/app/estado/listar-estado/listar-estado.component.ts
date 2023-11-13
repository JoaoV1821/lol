import { Component, OnInit } from '@angular/core';

import { Estado } from 'src/app/shared';
import { EstadoService } from '../services';

import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalEstadoComponent } from '../modal-estado';

@Component({
  selector: 'app-listar-estado',
  templateUrl: './listar-estado.component.html',
  styleUrls: ['./listar-estado.component.css']
})
export class ListarEstadoComponent implements OnInit {

  estados: Estado[] = [];
  ordenacaoCrescente: boolean = true;

  constructor(private estadoService: EstadoService,
    private modalService: NgbModal) { }

  ngOnInit(): void {
    this.estados = this.listarTodosEstadoComponent();
    this.ordenarEstados();
  }

  listarTodosEstadoComponent(): Estado[] {
    return this.estadoService.listarTodosEstadoService();
  }

  remover($event: any, estado: Estado): void {
    $event.preventDefault();
    if (confirm(`Deseja realmente remover o estado ${estado.nomeEstado}?`)) {
      this.estadoService.removerEstadoService(estado.id!);
      this.estados = this.listarTodosEstadoComponent();
    }
  }

  abrirModalEstado(estado: Estado) {
    const modalRef = this.modalService.open(ModalEstadoComponent);
    modalRef.componentInstance.estado = estado;
  }

  ordenarEstados(): void {
    this.estados.sort((a, b) => {
      const nomeA = a?.nomeEstado?.toUpperCase() || '';
      const nomeB = b?.nomeEstado?.toUpperCase() || '';

      if (this.ordenacaoCrescente) {
        return nomeA.localeCompare(nomeB);
      } else {
        return nomeB.localeCompare(nomeA);
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }

  ordenarSigla(): void {
    this.estados.sort((a, b) => {
      const siglaA = a?.sigla?.toUpperCase() || '';
      const siglaB = b?.sigla?.toUpperCase() || '';

      if (this.ordenacaoCrescente) {
        return siglaA.localeCompare(siglaB);
      } else {
        return siglaB.localeCompare(siglaA);
      }
    });
    this.ordenacaoCrescente = !this.ordenacaoCrescente;
  }
}
