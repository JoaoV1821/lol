import { Component, OnInit } from '@angular/core';

import { PagamentoService } from '../service';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {
  ativo = false;
  total = 185;
  
  carrinho: any = [
    { tipo: 'Bermuda', qt: 2, valor_un: 20, subtotal: 40 },
    { tipo: 'Short', qt: 2, valor_un: 25, subtotal: 50 },
    { tipo: 'Jeans', qt: 1, valor_un: 15, subtotal: 15 },
    { tipo: 'Sapato', qt: 4, valor_un: 20, subtotal: 80 }
  ]

  constructor() {

  }

  ngOnInit(): void {
    
  }

  mostrarItens() {
    this.ativo = !this.ativo;
  }
}
