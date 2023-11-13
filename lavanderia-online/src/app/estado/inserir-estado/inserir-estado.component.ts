import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Estado } from 'src/app/shared';
import { EstadoService } from '../services';

@Component({
  selector: 'app-inserir-estado',
  templateUrl: './inserir-estado.component.html',
  styleUrls: ['./inserir-estado.component.css']
})
export class InserirEstadoComponent implements OnInit {
  @ViewChild('formEstado') formEstado!: NgForm;
  estado!: Estado;

  constructor(
    private estadoService: EstadoService,
    private router: Router) { }

  ngOnInit(): void {
    this.estado = new Estado();
  }

  inserirEstadoComponent(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.inserirEstadoService(this.estado);
      this.router.navigate(["/estados"]);
    }
  }
}
