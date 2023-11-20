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
  }


  aprovar() {

  }

  rejeitar() {

  }

}
