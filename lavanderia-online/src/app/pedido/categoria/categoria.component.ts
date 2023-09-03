import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PedidoService } from '../services';

interface itemList {
  tipo: string,
  valor_un: number,
  categoria: string
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {
  
  @Input() categoria = '';
  @Input() items: itemList[] = [];
  @Output() addClick = new EventEmitter();
  ativo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  switch() {
    this.ativo = !this.ativo;
  }

  adicionar(tipo: string, valor: number) {
    this.addClick.emit({ tipo: tipo, valor_un: valor });
  }
}