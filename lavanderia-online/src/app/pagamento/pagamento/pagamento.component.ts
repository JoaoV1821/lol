<<<<<<< HEAD
import { Component, OnInit } from '@angular/core';

import { PagamentoService } from '../service';
=======
import { Component } from '@angular/core';
>>>>>>> ef40c2d51e90d81c49add8296205cb25ef1d4124

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
<<<<<<< HEAD
export class PagamentoComponent implements OnInit {
  ativo = false;
  
  total = 185;
  
=======
export class PagamentoComponent {
  ativo = false;
  total = 185;
>>>>>>> ef40c2d51e90d81c49add8296205cb25ef1d4124
  carrinho: any = [
    { tipo: 'Bermuda', qt: 2, valor_un: 20, subtotal: 40 },
    { tipo: 'Short', qt: 2, valor_un: 25, subtotal: 50 },
    { tipo: 'Jeans', qt: 1, valor_un: 15, subtotal: 15 },
    { tipo: 'Sapato', qt: 4, valor_un: 20, subtotal: 80 }
  ]
<<<<<<< HEAD

  constructor() {
    
  }

  ngOnInit(): void {
    
  }

  mostrarItens() {
    this.ativo = !this.ativo;
  }
}
=======
  mostrarItens() {
    this.ativo = !this.ativo;
  }
}
>>>>>>> ef40c2d51e90d81c49add8296205cb25ef1d4124
