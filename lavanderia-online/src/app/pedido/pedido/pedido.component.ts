import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalPedidoComponent } from '../modal-pedido/modal-pedido.component';
import { PedidoService } from '../services';

interface itemCarrinho {
  tipo: string,
  qt: number,
  valor_un: number,
  subtotal: number,
  prazo: number
}

interface itemList {
  tipo: string,
  valor_un: number,
  categoria: string,
  prazo: number
}

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})


export class PedidoComponent implements OnInit{

  //carrinho: itemCarrinho[] = [
  // { tipo: 'Bermuda', qt: 4, valor_un: 20, subtotal: 80 },
  // { tipo: 'Short', qt: 4, valor_un: 20, subtotal: 80 },
  // { tipo: 'Jeans', qt: 4, valor_un: 20, subtotal: 80 },
  //  { tipo: 'Sapato', qt: 4, valor_un: 20, subtotal: 80 }
  //]

  carrinho: itemCarrinho[] = [];
  lista_de_items: itemList[] = [
    { tipo: "Batina", valor_un: 10, categoria: "Blusas", prazo: 10 },
    { tipo: "Blusa Regata", valor_un: 15, categoria: "Blusas", prazo: 12 },
    { tipo: "Blusa Cropped", valor_un: 12, categoria: "Blusas", prazo: 13 },
    { tipo: "Blusa Comum ", valor_un: 10, categoria: "Blusas", prazo: 14 },
    { tipo: "Calça Jeans", valor_un: 14, categoria: "Calças", prazo: 15 },
    { tipo: "Calça Social", valor_un: 16, categoria: "Calças", prazo: 11 },
    { tipo: "Camisa Social", valor_un: 14, categoria: "Camisas", prazo: 10 },
    { tipo: "Camiseta manga longa", valor_un: 15, categoria: "Camisas", prazo: 9 },
    { tipo: "Camiseta manga curta ", valor_un: 13, categoria: "Camisas", prazo: 8 },
    { tipo: "Casaco Simples", valor_un: 30, categoria: "Casacos", prazo: 7 },
    { tipo: "Casaco Longo", valor_un: 35, categoria: "Casacos", prazo: 12 },
    { tipo: "Jaqueta Simples", valor_un: 40, categoria: "Casacos", prazo: 15 }
  ]
  total: number = 0;
  prazoMax : number = 0;

  constructor(private modalService : NgbModal) {
  }

  orcamento() {
    const modalRef = this.modalService.open(ModalPedidoComponent);
    modalRef.componentInstance.orcamento = this.total;
    modalRef.componentInstance.listaRoupasPedido = this.carrinho;    
    modalRef.componentInstance.prazoMax = this.prazoMax;
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

  addItem(item: itemList ) {
    for (let x = 0; x < this.carrinho.length; x++) {
      if (this.carrinho[x].tipo == item.tipo) {
        this.carrinho[x].qt += 1;
        this.carrinho[x].subtotal += this.carrinho[x].valor_un;
        this.updateTotal();
        return;
      }
    }
    this.carrinho.push({
      tipo: item.tipo,
      qt: 1,
      valor_un: item.valor_un,
      subtotal: 1 * item.valor_un,
      prazo: item.prazo
    })
    this.updateTotal();
    this.prazo();
  }

  updateTotal() {
    this.total = 0;
    for (let x = 0; x < this.carrinho.length; x++) {
      this.total += this.carrinho[x].subtotal;
    }
  }

    prazo() {
      console.log(this.carrinho);
      for (let x = 0; x < this.carrinho.length; x++) {
        if(this.carrinho[x].prazo > this.prazoMax){
          this.prazoMax = this.carrinho[x].prazo;
        }
      }
      console.log(this.prazoMax);
    }

  limparItens() {
    this.carrinho = [];
    this.total = 0;
  }

  ngOnInit(): void {

  }
}