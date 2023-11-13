import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Cidade, Estado } from 'src/app/shared';
import { CidadeService } from '../services';
import { EstadoService } from 'src/app/estado';

@Component({
  selector: 'app-editar-cidade',
  templateUrl: './editar-cidade.component.html',
  styleUrls: ['./editar-cidade.component.css']
})
export class EditarCidadeComponent implements OnInit {
  @ViewChild("formCidade") formCidade!: NgForm;
  cidade!: Cidade;
  estados: Estado[] = [];
  valorMinimo: any;

  constructor(
    private cidadeService: CidadeService,
    private estadoService: EstadoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    this.estados = this.estadoService.listarTodosEstadoService();
    const res = this.cidadeService.buscarPorIdCidadeService(id);
    if (res !== undefined)
      this.cidade = res;
    else
      throw new Error("Cidade não encontrada: id = " + id);
  }

  atualizarCidadeComponent(): void {
    if (this.formCidade.form.valid) {
      this.cidadeService.atualizarCidadeService(this.cidade);
      this.router.navigate(['/cidades']);
    }
  }
}
