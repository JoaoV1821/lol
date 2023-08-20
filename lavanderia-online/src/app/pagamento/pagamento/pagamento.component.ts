import { Component } from '@angular/core';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent {
  ativo = false;
  total = 185;
  carrinho: any = [
    { tipo: 'Bermuda', qt: 2, valor_un: 20, subtotal: 40 },
    { tipo: 'Short', qt: 2, valor_un: 25, subtotal: 50 },
    { tipo: 'Jeans', qt: 1, valor_un: 15, subtotal: 15 },
    { tipo: 'Sapato', qt: 4, valor_un: 20, subtotal: 80 }
  ]
  mostrarItens() {
    this.ativo = !this.ativo;
  }
}
