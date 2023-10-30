import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface pedido {
  pedido: string,
  valor: number,
  data: string,
  prazo: string,
  status: string
}

@Component({
  selector: 'app-listagem',
  templateUrl: './listagem.component.html',
  styleUrls: ['./listagem.component.css']
})
export class ListagemComponent implements OnInit {

  estado_pedido: string | null = null;
  dados: pedido[] = [];

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.carregarDadosDoServidor();
  }

  carregarDadosDoServidor() {
    this.http.get<any>('http://localhost:8080/get/pedidos')
      .subscribe((data: pedido[]) => {
        this.dados = data;
        this.dados.sort(this.sortFunction);
      });
  }

  mudarEstadoPedido(estado: Event) {
    const target = estado.target as HTMLSelectElement;
    this.estado_pedido = target.value.toUpperCase();
    console.log(this.estado_pedido);
  }

  filtrarEstadoPedido(estadoPedido: string): boolean {
    if (this.estado_pedido == null || this.estado_pedido == 'TODOS') {
      return true;
    } else if (this.estado_pedido == estadoPedido.toUpperCase()) {
      return true;
    }
    return false;
  }

  sortFunction(obj1: pedido, obj2: pedido): number {
    if (obj1.data < obj1.data) {
      return 1;
    } else if (obj2.data < obj1.data) {
      return -1;
    }
    return 0;
  }
}
