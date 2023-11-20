import { Component, OnInit } from '@angular/core';

import { OrcamentoService } from '../services';
import { Pedido } from 'src/app/shared';

@Component({
  selector: 'app-orcamento',
  templateUrl: './orcamento.component.html',
  styleUrls: ['./orcamento.component.css']
})

export class OrcamentoComponent implements OnInit {

  pedidos!: Pedido[];

  constructor(private orcamentoService: OrcamentoService) {

  }

  async ngOnInit(): Promise<void> {
    this.pedidos = await this.orcamentoService.getPedidos();
    console.log(this.pedidos);
  }


  async aprovar(pedido: Pedido) {
    await this.orcamentoService.aprovar(pedido);
    this.pedidos = await this.orcamentoService.getPedidos();
  }

  async rejeitar(pedido: Pedido) {
    await this.orcamentoService.rejeitar(pedido);

    this.pedidos = await this.orcamentoService.getPedidos();
  }

  async filtrar(data: HTMLInputElement) {
    let value = data.value;
    if (value != null && value != undefined && value != '') {
      this.pedidos = await this.orcamentoService.filtrar(value);
      // this.pedidos = await this.orcamentoService.getPedidos();
    }

  }

}
