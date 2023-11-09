import { Component, OnInit, Input } from '@angular/core';
import { PedidoComponent } from '../pedido';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Router } from '@angular/router';

@Component({
  selector: 'modal-pedido',
  templateUrl: './modal-pedido.component.html',
  styleUrls: ['./modal-pedido.component.css']
})
export class ModalPedidoComponent{
  @Input() orcamento! : number;
  @Input() prazoMax! : number;
  @Input() listaRoupasPedido! : PedidoComponent['carrinho'];

  showLink : boolean = false;
  aprovado : boolean = false;
  rejeitado : boolean = false;
  numPedido : number = 0;
  
  constructor(public activeModal : NgbActiveModal, private router : Router) { }
  
  aprovar() : void {
    this.numPedido = Math.ceil(Math.random() * 999999);
    this.aprovado = true;
  }
  rejeitar() : void {
    this.rejeitado = true;
  }
  sair() : void {
    this.activeModal.close();
    this.router.navigate(['/pagina-inicial']);
  }
}