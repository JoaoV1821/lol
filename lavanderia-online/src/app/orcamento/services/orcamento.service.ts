import { Injectable } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { Pedido } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor() { }

  async getPedidos(): Promise<Pedido[]> {
    let response = await RequestMaker.getData<Pedido[]>("/usuario/get/pedidos");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }

  async aprovar(pedido: Pedido) {
    let response = await RequestMaker.postData<Pedido[]>("/usuario/update/pedido/status", { numeroPedido: pedido.numero, status: "APROVADO" });
    if (!response.ok(response.data)) {
      alert("Não foi possível aprovar o pedido");
    }
  }

  async rejeitar(pedido: Pedido) {
    let response = await RequestMaker.postData<Pedido[]>("/usuario/update/pedido/status", { numeroPedido: pedido.numero, status: "REJEITADO" });
    if (!response.ok(response.data)) {
      alert("Não foi possível rejeitar o pedido");
    }
  }


  async filtrar(data: String) {

    let response = await RequestMaker.getData<Pedido[]>(`/usuario/get/pedidos?&data=${data}`);
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }

}
