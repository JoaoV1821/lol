import { Injectable } from '@angular/core';
import { Cidade } from 'src/app/shared';

const LS_CHAVE: string = "cidades";

@Injectable({
  providedIn: 'root'
})
export class CidadeService {

  constructor() { }

  listarTodasCidadeService(): Cidade[] {
    const cidades = localStorage[LS_CHAVE];
    return cidades ? JSON.parse(cidades) : [];
  }

  inserirCidadeService(cidade: Cidade): void {
    const cidades = this.listarTodasCidadeService();
    cidade.id = new Date().getTime();
    cidades.push(cidade);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  buscarPorIdCidadeService(id: number): Cidade | undefined {
    const cidades: Cidade[] = this.listarTodasCidadeService();
    return cidades.find(cidade => cidade.id === id);
  }

  atualizarCidadeService(cidade: Cidade): void {
    const cidades: Cidade[] = this.listarTodasCidadeService();
    cidades.forEach((obj, index, objs) => {
      if (cidade.id === obj.id) {
        objs[index] = cidade
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }

  removerCidadeService(id: number): void {
    let cidades: Cidade[] = this.listarTodasCidadeService();
    cidades = cidades.filter(cidade => cidade.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(cidades);
  }
}
