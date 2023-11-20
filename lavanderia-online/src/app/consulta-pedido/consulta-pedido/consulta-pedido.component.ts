import { Component, OnInit } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { ConsultaPedidoService } from '../services';
import { Pedido } from '../../shared/models/pedido.model'
import { Roupa } from 'src/app/shared';
import { Item } from 'src/app/shared/models/item.model';
import { Console } from 'console';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {

  pedido!: Pedido;
  roupas!: Item[];
  vazio: number = 0;

  constructor(private consultaPedidoService: ConsultaPedidoService) {

  }

  ngOnInit(): void {
  }
  async buscarPorPedido(numero: string): Promise<void> {
    let response = await RequestMaker.getData<Pedido>(`/usuario/get/pedido?numeroPedido=${numero}`);
    if (response.ok(response.data)) {
      this.pedido = response.data;
      if (this.pedido.roupas) {
        this.roupas = this.pedido.roupas;
      }
      console.log(this.roupas);
      this.vazio = 1;
    }
    else {
      this.vazio = 2;
    }
  }

  getRoupas(): Item[] | undefined {
    if (this.pedido != undefined) {
      if (this.pedido.roupas != undefined) {
        this.roupas = this.pedido.roupas;
      }
    }
    return [];
  }

  /*   async ngOnInit(): Promise<void> {

    let id = this.route.snapshot.params['id'];
    let response = await RequestMaker.getData<Pedido>(`/usuario/get/pedido&numeroPedido=${id}`);
    if (response.ok(response.data)) {
      this.pedido = response.data;
    }
    console.log(response);
  }
  */

}
