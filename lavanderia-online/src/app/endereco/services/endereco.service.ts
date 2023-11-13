import { Injectable } from '@angular/core';
import { Endereco } from 'src/app/shared';

const LS_CHAVE: string = "enderecos";

@Injectable({
  providedIn: 'root'
})
export class EnderecoService {

  constructor() { }

  listarTodosEnderecoService(): Endereco[] {
    const enderecos = localStorage[LS_CHAVE];
    return enderecos ? JSON.parse(enderecos) : [];
  }

  inserirEnderecoService(endereco: Endereco): void {
    const enderecos = this.listarTodosEnderecoService();
    endereco.id = new Date().getTime();
    enderecos.push(endereco);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  buscarPorIdEnderecoService(id: number): Endereco | undefined {
    const enderecos: Endereco[] = this.listarTodosEnderecoService();
    return enderecos.find(endereco => endereco.id === id);
  }

  atualizarEnderecoService(endereco: Endereco): void {
    const enderecos: Endereco[] = this.listarTodosEnderecoService();
    enderecos.forEach((obj, index, objs) => {
      if (endereco.id === obj.id) {
        objs[index] = endereco
      }
    });
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }

  removerEnderecoService(id: number): void {
    let enderecos: Endereco[] = this.listarTodosEnderecoService();
    enderecos = enderecos.filter(endereco => endereco.id !== id);
    localStorage[LS_CHAVE] = JSON.stringify(enderecos);
  }
}
