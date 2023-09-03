import { Component, ElementRef, ViewChild } from '@angular/core';
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
  @ViewChild("checkboxDiv", { read: ElementRef }) checkboxDiv!: ElementRef<HTMLElement>;
  @ViewChild("checkBoxLabel", { read: ElementRef }) checkboxLabel!: ElementRef<HTMLElement>;
  @ViewChild("dateInput2", { read: ElementRef }) dateInput2!: ElementRef<HTMLElement>;
  @ViewChild("dateInput1", { read: ElementRef }) dateInput1!: ElementRef<HTMLElement>;
  hostname = "";
  isChecked: boolean = false;
  dataInicial: string = ""
  dataPrazo: string = ""
  estado_pedido: string | null = null;
  pedidos: pedido[] = []
  mudarEstadoPedido(estado: Event) {
    const target = estado.target as HTMLSelectElement;
    this.estado_pedido = target.value.toUpperCase();
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
  async getPedidos(isChecked: boolean, data_inicial?: string | null, data_final?: string | null) {

    let dataInicial: Date;
    let response;
    let data;
    if (data_inicial == undefined || data_final == undefined) {
      if (isChecked) {
        dataInicial = new Date()
        dataInicial = new Date(dataInicial.getTime() - dataInicial.getTimezoneOffset() * 60 * 1000);
        let stringDate: string = dataInicial.getUTCFullYear().toString() + "-" +
          (dataInicial.getUTCMonth() + 1).toString().padStart(2, '0') + "-" + dataInicial.getUTCDate().toString().padStart(2, '0');
        response = await fetch(this.hostname + "/pedido/get/pedidos?dataInicial=" + stringDate);
        data = await response.json();
        this.pedidos = this.formatPedidos(data);
      } else {
        response = await fetch(this.hostname + "/pedido/get/pedidos");
        data = await response.json();
        this.pedidos = this.formatPedidos(data);
      }
    } else {
      if (isChecked) {
        this.checkboxDiv.nativeElement.classList.add("shake");
        this.checkboxLabel.nativeElement.classList.remove("btn-outline-primary");
        this.checkboxLabel.nativeElement.classList.add("btn-outline-danger");
        setTimeout(() => {
          this.checkboxDiv.nativeElement.classList.remove("shake");
          this.checkboxLabel.nativeElement.classList.remove("btn-outline-danger");
          this.checkboxLabel.nativeElement.classList.add("btn-outline-primary");
        }, 1000)

      }
      else if (data_inicial == "" && data_final == "") {
        response = await fetch(this.hostname + "/pedido/get/pedidos");
        data = await response.json();
        this.pedidos = this.formatPedidos(data);
      } else if (data_inicial == "" && data_final != "") {
        this.dateInput1.nativeElement.classList.add("shake")
        setTimeout(() => { this.dateInput1.nativeElement.classList.remove("shake") }, 1000)
      } else if ((data_inicial != "" && data_final == "") || this.checkDates(data_inicial, data_final)) {
        this.dateInput2.nativeElement.classList.add("shake");
        setTimeout(() => {
          this.dateInput2.nativeElement.classList.remove("shake");
        }, 1000)
      } else {
        response = await fetch(this.hostname + '/pedido/get/pedidos?dataInicial=' + data_inicial + "&dataPrazo=" + data_final);
        data = await response.json();
        this.pedidos = this.formatPedidos(data);
      }
    }
  }

  formatPedidos(pedidos: pedido[]) {
    pedidos.forEach((pedido, index, arr) => {
      arr[index].numero = this.pad(pedido.numero.toString(), 7);
      arr[index].data = this.reformatDate(pedido.data);
      arr[index].prazo = this.reformatDate(pedido.prazo);
    })
    return pedidos;
  }
  pad(value: string, amount: number) {
    let s: string = value;
    while (s.length < amount) {
      s = "0" + s;
    }
    return s;
  }

  reformatDate(date: string): string {

    let ano = date.substring(0, 4);
    let mes = date.substring(5, 7);
    let dia = date.substring(8, 10);
    return [dia, mes, ano].join('/');
  }
  checkDates(data_inicial: string, data_final: string) {
    let d1 = Date.parse(data_inicial);
    let d2 = Date.parse(data_final);
    if (d2 < d1) {
      return true;
    }
    return false;
  }
  async changePedidoStatus(event: Event, pedido: pedido) {
    let buttonComponent = event.target as HTMLButtonElement;
    let newStatus = "";
    if (buttonComponent.textContent != null) {
      switch (buttonComponent.textContent.toUpperCase()) {
        case "RECOLHER":
          newStatus = "RECOLHIDO"
          break;
        case "LAVAGEM":
          newStatus = "AGUARDANDO PAGAMENTO"
          break;
        case "FINALIZAR":
          newStatus = "FINALIZADO"
          break;
      }
      if (newStatus != "") {


        let requestBody: RequestInit = {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify({ "numero": pedido.numero, "status": newStatus })
        }
        let response = await fetch(this.hostname + "/pedido/update/status", requestBody);
        if (response.status == 200) {
          console.log("Tudo ok")
          this.getPedidos(false, undefined, undefined);
        } else {
          console.log("Erro ao atualizar!");
        }
      }
    }

  }
}
