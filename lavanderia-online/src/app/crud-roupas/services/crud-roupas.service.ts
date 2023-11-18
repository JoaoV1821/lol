import { Injectable } from '@angular/core';

import { Roupa } from 'src/app/shared/models/roupa.model';

const LS_CHAVE: string = "roupas";

@Injectable({
  providedIn: 'root'
})
export class CrudRoupasService {

  constructor() { }

  listarTodos(): Roupa[] {
    const roupas = localStorage[LS_CHAVE];
    return roupas ? JSON.parse(roupas) : [];
  }
  inserir(roupa: Roupa): void {
    const roupas = this.listarTodos();
    roupa.id = new Date().getTime();
    roupas.push(roupa);
    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }
  buscarPorId(id: number): Roupa | undefined {
    const roupas: Roupa[] = this.listarTodos();
    return roupas.find(roupa => roupa.id === id);
  }
  atualizar(roupa: Roupa): void {
    const roupas: Roupa[] = this.listarTodos();
    roupas.forEach((obj, index, objs) => {
      if (roupa.id === obj.id) {
        objs[index] = roupa
      }
    })
    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }
  remover(id: number): void {
    let roupas: Roupa[] = this.listarTodos();
    roupas = roupas.filter(roupa => roupa.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(roupas);
  }


}
