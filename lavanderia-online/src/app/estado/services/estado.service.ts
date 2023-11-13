import { Injectable } from '@angular/core';
import { Estado } from 'src/app/shared';


const LS_CHAVE: string = "estados";

@Injectable({
  providedIn: 'root'
})
export class EstadoService {

  constructor() { }

  listarTodosEstadoService(): Estado[] {
    const estados = localStorage[LS_CHAVE];
    return estados ? JSON.parse(estados) : [];
  }

  inserirEstadoService(estado: Estado): void {
    const estados = this.listarTodosEstadoService();
    estado.id = new Date().getTime();
    estados.push(estado);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  buscarPorIdEstadoService(id: number): Estado | undefined {
    const estados: Estado[] = this.listarTodosEstadoService();
    return estados.find(estado => estado.id === id);
  }

  atualizarEstadoService(estado: Estado): void {
    const estados: Estado[] = this.listarTodosEstadoService();
    estados.forEach((obj, index, objs) => {
      if (estado.id === obj.id) {
        objs[index] = estado
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }

  removerEstadoService(id: number): void {
    let estados: Estado[] = this.listarTodosEstadoService();
    estados = estados.filter(estado => estado.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(estados);
  }
}
