import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  async postPedido(object: any) {
    return await axios.post(`http://localhost:8080/post/pedido`, 
    {
      "itens": object.item,
      "total": object.total
    },

    {
      headers: {
        "Content-Type": "application/json",
      }
    }
    
    )
  }

}
