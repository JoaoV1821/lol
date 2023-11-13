import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

import { Endereco } from 'src/app/shared';
import { EnderecoService } from '../services';

@Component({
  selector: 'app-inserir-endereco',
  templateUrl: './inserir-endereco.component.html',
  styleUrls: ['./inserir-endereco.component.css']
})
export class InserirEnderecoComponent implements OnInit {
  @ViewChild('formEndereco') formEndereco!: NgForm;
  endereco!: Endereco;

  constructor(
    private enderecoService: EnderecoService,
    private router: Router) { }

  ngOnInit(): void {
    this.endereco = new Endereco();
  }

  inserirEnderecoComponent(): void {
    if (this.formEndereco.form.valid) {
      this.enderecoService.inserirEnderecoService(this.endereco);
      this.router.navigate(["/enderecos"]);
    }
  }
}
