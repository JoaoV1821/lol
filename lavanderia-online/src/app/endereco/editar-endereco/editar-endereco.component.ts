import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-editar-endereco',
  templateUrl: './editar-endereco.component.html',
  styleUrls: ['./editar-endereco.component.css']
})
export class EditarEnderecoComponent implements OnInit {
  @ViewChild("formEndereco") formEndereco!: NgForm;
  endereco!: Endereco;
  valorMinimo: any;

  constructor(
    private enderecoService: EnderecoService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    let id = +this.route.snapshot.params['id'];
    const res = this.enderecoService.buscarPorIdEnderecoService(id);
    if (res !== undefined)
      this.endereco = res;
    else
      throw new Error("Endereco não encontrado: id = " + id);
  }

  atualizarEnderecoComponent(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.atualizarEnderecoService(this.endereco);
      this.router.navigate(['/enderecos']);
    }
  }
}
