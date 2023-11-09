import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  async postPedido(object: any) {
    return await axios.post(`http://localhost:8080/pedido/add/pedido`, 

    {
      "roupas": object.itens,
      "total": object.total,
      "data": object.data,
      "prazo": object.data,
      "status": object.status
    },

    {
      headers: {
        "Content-Type": "application/json",
      }
    }
    
    )
  }

}
