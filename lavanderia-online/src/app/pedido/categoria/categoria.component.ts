import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { PedidoService } from '../services';

interface itemList {
  tipo: string,
  valor_un: number,
  categoria: string,
  prazo: number
}

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})

export class CategoriaComponent implements OnInit {

  @Input() categoria = '';
  @Input() items: itemList[] = [];
  @Output() addClick = new EventEmitter<itemList>(); // Agora emitirá um objeto itemList
  ativo = false;

  constructor() {
  }

  ngOnInit(): void {
  }

  switch() {
    this.ativo = !this.ativo;
  }

  adicionar(item: itemList) {
    this.addClick.emit(item); // Emita o objeto itemList completo
  }
}
