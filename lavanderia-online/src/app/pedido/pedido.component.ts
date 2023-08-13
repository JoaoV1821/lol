import { Component } from '@angular/core';

interface itemCarrinho {
  tipo: string,
  qt: number,
  valor_un: number,
  subtotal: number,
}
interface itemList {
  tipo: string,
  valor_un: number,
  categoria: string
}
@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})

export class PedidoComponent {

  //carrinho: itemCarrinho[] = [
  // { tipo: 'Bermuda', qt: 4, valor_un: 20, subtotal: 80 },
  // { tipo: 'Short', qt: 4, valor_un: 20, subtotal: 80 },
  // { tipo: 'Jeans', qt: 4, valor_un: 20, subtotal: 80 },
  //  { tipo: 'Sapato', qt: 4, valor_un: 20, subtotal: 80 }
  //]
  carrinho: itemCarrinho[] = [];
  lista_de_items: itemList[] = [
    { tipo: "Batina", valor_un: 10, categoria: "Blusas" },
    { tipo: "Blusa Regata", valor_un: 15, categoria: "Blusas" },
    { tipo: "Blusa Cropped", valor_un: 12, categoria: "Blusas" },
    { tipo: "Blusa Comum ", valor_un: 10, categoria: "Blusas" },
    { tipo: "Calça Jeans", valor_un: 14, categoria: "Calças" },
    { tipo: "Calça Social", valor_un: 16, categoria: "Calças" },
    { tipo: "Camisa Social", valor_un: 14, categoria: "Camisas" },
    { tipo: "Camiseta manga longa", valor_un: 15, categoria: "Camisas" },
    { tipo: "Camiseta manga curta ", valor_un: 13, categoria: "Camisas" },
    { tipo: "Casaco Simples", valor_un: 30, categoria: "Casacos" },
    { tipo: "Casaco Longo", valor_un: 35, categoria: "Casacos" },
    { tipo: "Jaqueta Simples", valor_un: 40, categoria: "Casacos" }
  ]
  total: number = 0;
  constructor() {
  }
  changeItemValue(index: number, operation: string) {
    if (operation == 'up') {
      this.carrinho[index].qt += 1;
      this.carrinho[index].subtotal = this.carrinho[index].qt * this.carrinho[index].valor_un;
      this.updateTotal();
    } else {
      this.carrinho[index].qt -= 1;
      if (this.carrinho[index].qt <= 0) {
        this.carrinho.splice(index, 1);
      }
      else {
        this.carrinho[index].subtotal = this.carrinho[index].qt * this.carrinho[index].valor_un;
      }
      this.updateTotal();
    }
  }
  addItem(itens: any) {
    for (let x = 0; x < this.carrinho.length; x++) {
      if (this.carrinho[x].tipo == itens.tipo) {
        this.carrinho[x].qt += 1;
        this.carrinho[x].subtotal += this.carrinho[x].valor_un;
        this.updateTotal();
        return;
      }
    }
    this.carrinho.push({
      tipo: itens.tipo,
      qt: 1,
      valor_un: itens.valor_un,
      subtotal: 1 * itens.valor_un
    })
    this.updateTotal();
  }
  updateTotal() {
    this.total = 0;
    for (let x = 0; x < this.carrinho.length; x++) {
      this.total += this.carrinho[x].subtotal;
    }
  }
  limparItens() {
    this.carrinho = [];
    this.total = 0;
  }
}
