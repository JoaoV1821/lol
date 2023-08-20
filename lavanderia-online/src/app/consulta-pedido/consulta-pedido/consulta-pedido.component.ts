import { Component, OnInit } from '@angular/core';
import { ConsultaPedidoService } from '../services';

@Component({
  selector: 'app-consulta-pedido',
  templateUrl: './consulta-pedido.component.html',
  styleUrls: ['./consulta-pedido.component.css']
})
export class ConsultaPedidoComponent implements OnInit {

  constructor(private consultaPedidoService: ConsultaPedidoService){ }

  ngOnInit(): void { }
}
