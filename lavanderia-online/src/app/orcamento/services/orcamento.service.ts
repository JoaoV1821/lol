import { Injectable } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { Pedido } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class OrcamentoService {

  constructor() { }

  async getPedidos(): Promise<Pedido[]> {
    let response = await RequestMaker.getData<Pedido[]>("/pedido/get/pedidos");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }

}
