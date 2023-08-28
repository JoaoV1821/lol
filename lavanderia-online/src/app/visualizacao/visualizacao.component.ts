import { Component } from '@angular/core';
import { getConnection } from '../host';

interface pedido {
  numero: string,
  total: number,
  data: string,
  prazo: string,
  status: string
}

@Component({
  selector: 'app-visualizacao',
  templateUrl: './visualizacao.component.html',
  styleUrls: ['./visualizacao.component.css']
})
export class VisualizacaoComponent {
  async ngOnInit(): Promise<void> {
    this.hostname = await getConnection();
    this.pedidos.sort(this.sortFunction);
  }
  hostname = "";
  isChecked: boolean = false;
  dataInicial: string = ""
  dataPrazo: string = ""
  estado_pedido: string | null = null;
  /*pedidos: pedido[] = [
    { numero: '000003', total: 60, data: '12/08/2023', prazo: '16/08/2023', status: 'EM ABERTO' },
    { numero: '000005', total: 85, data: '11/08/2023', prazo: '16/08/2023', status: 'RECOLHIDO' },
    { numero: '000001', total: 55, data: '12/08/2023', prazo: '16/08/2023', status: 'AGUARDANDO PAGAMENTO' },
    { numero: '000002', total: 70, data: '12/08/2023', prazo: '16/08/2023', status: 'PAGO' },
    { numero: '000004', total: 40, data: '12/08/2023', prazo: '16/08/2023', status: 'CANCELADO' },
    { numero: '000006', total: 75, data: '10/08/2023', prazo: '13/08/2023', status: 'FINALIZADO' }
  ]*/
  pedidos: pedido[] = []
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
  async getPedidos(isChecked: boolean, event: Event, data_inicial?: string | null, data_final?: string | null) {
    let fetchBody: RequestInit = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
    }
    let dataInicial: Date;
    let dataFinal: Date;
    let response;
    let data;
    if (data_inicial == undefined || data_final == undefined) {
      if (isChecked) {
        dataInicial = new Date();
        let stringDate: string = dataInicial.getUTCFullYear().toString() + "-" +
          (dataInicial.getUTCMonth() + 1).toString().padStart(2, '0') + "-" + dataInicial.getUTCDate().toString().padStart(2, '0');
        fetchBody.body = JSON.stringify({ 'dataInicial': stringDate, "dataPrazo": stringDate })
        response = await fetch(this.hostname + "/pedido/get/pedidos?dataInicial=" + "2023-08-28" + "&dataPrazo=" + "2023-08-28");
        console.log("/pedido/get/pedidos?dataInicial=" + "2023-08-28" + "&dataPrazo=" + "2023-08-28")
        data = await response.json();
        this.pedidos = data;
      }
    } else {
      if (isChecked) {
        console.log("Desativa ae")
      }
      else if (data_inicial == "" || data_final == "") {
        console.log("Veja a daa ai")
      } else if (this.checkDates(data_inicial, data_final)) {
        console.log("DATA errada mane")
      } else {
        fetchBody.body = JSON.stringify({ "dataInicial": data_inicial, "dataPrazo": data_final })
      }
    }
  }

  checkDates(data_inicial: string, data_final: string) {
    let d1 = Date.parse(data_inicial);
    let d2 = Date.parse(data_final);
    if (d2 < d1) {
      return true;
    }
    return false;
  }
}
