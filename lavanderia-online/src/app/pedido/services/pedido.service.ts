import { Injectable } from '@angular/core';
import axios from 'axios';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {

  constructor() { }

  async postPedido(object: any) {
    console.log(object.carrinhos)
    await axios.post('/api/usuario/add/pedido',
      {

        "carrinhos": object.carrinhos
        /*"carrinhos": [
          { "id": "1", "quantidade": "2" },
          { "id": "3", "quantidade": "4" },
        ],
        */
      }


    )

  }

  async getRoupas() {
    try {
      const response = await axios.get('/api/roupa/get/roupas');
      return response.data;
    } catch (error) {
      console.error('Error getting roupas');
      throw error;
    }
  }

  async getCategorias() {
    try {
      const response = await axios.get('/api/categoria/get/categorias');
      return response.data;
    } catch (error) {
      console.error('Error getting categorias');
      throw error;
    }
  }
}
