import { Component, OnInit } from '@angular/core';
import { Pedido } from 'src/app/shared';
import { PagamentoService } from '../service';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RequestMaker } from 'src/app/services/requestService';

@Component({
  selector: 'app-pagamento',
  templateUrl: './pagamento.component.html',
  styleUrls: ['./pagamento.component.css']
})
export class PagamentoComponent implements OnInit {

  pedido!: Pedido;

  constructor(private pagamentoService: PagamentoService,
    private router: Router,
    private route: ActivatedRoute) {

  }

  async ngOnInit(): Promise<void> {

    let id = this.route.snapshot.params['id'];
    let response = await RequestMaker.getData<Pedido>(`/usuario/get/pedido?numeroPedido=${id}`);
    if (response.ok(response.data)) {
      this.pedido = response.data;
    }
    console.log(response);
  }

  async pagar(pedido: Pedido) {
    RequestMaker.postData<void>("/usuario/update/pedido/status", {
      numeroPedido: pedido.numero,
      status: "PAGO"
    });
    this.router.navigate(['/seus-pedidos']);
  }

  /*
    async ngOnInit(): Promise<void> {
      let response = await RequestMaker.getData<Pedido[]>("/usuario/get/pedidos?status=em%20aberto");
      if (response.ok(response.data)) {
        this.pedidos = response.data;
      } else {
        this.vazio = true;
      }
    }
  */

  /* 
  async alterarStatus(pedido: Pedido) {

    if (confirm(`Deseja realmente cancelar o pedido ${pedido.numero}?`)) {

      RequestMaker.postData<void>("/usuario/update/pedido/status", {
        numeroPedido: pedido.numero,
        status: "CANCELADO"
      });

    }
  }*/

}
