import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Estado } from 'src/app/shared';
import { EstadoService } from '../services';

@Component({
  selector: 'app-editar-estado',
  templateUrl: './editar-estado.component.html',
  styleUrls: ['./editar-estado.component.css']
})
export class EditarEstadoComponent implements OnInit {
  @ViewChild("formEstado") formEstado!: NgForm;
  estado!: Estado;
  valorMinimo: any;

  constructor(
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.estadoService.buscarPorIdEstadoService(id);
    if (res !== undefined)
      this.estado = res;
    else
      throw new Error("Estado não encontrado: id = " + id);
  }

  atualizarEstadoComponent(): void {
    if (this.formEstado.form.valid) {
      this.estadoService.atualizarEstadoService(this.estado);
      this.router.navigate(['/estados']);
    }
  }
}
