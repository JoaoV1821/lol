import { Component, OnInit } from '@angular/core';

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
  ngOnInit(): void {
    this.dados.sort(this.sortFunction);
  }
  estado_pedido: string | null = null;
  dados: pedido[] = [{ pedido: '000003', valor: 60, data: '12/08/2023', prazo: '16/08/2023', status: 'EM ABERTO' },
  { pedido: '000005', valor: 85, data: '11/08/2023', prazo: '16/08/2023', status: 'RECOLHIDO' },
  { pedido: '000001', valor: 55, data: '12/08/2023', prazo: '16/08/2023', status: 'AGUARDANDO PAGAMENTO' },
  { pedido: '000002', valor: 70, data: '12/08/2023', prazo: '16/08/2023', status: 'PAGO' },
  { pedido: '000004', valor: 40, data: '12/08/2023', prazo: '16/08/2023', status: 'CANCELADO' },
  { pedido: '000006', valor: 75, data: '10/08/2023', prazo: '13/08/2023', status: 'FINALIZADO' }
  ]
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
    } else if (
      obj2.data < obj1.data
    ) {
      return -1;
    }
    return 0;
  }
}
