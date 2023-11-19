//import jsPDF
import { Injectable } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { ClienteRelatorio } from '../relatorios';
import { TopCliente } from 'src/app/shared/models/top-cliente.model';
import { Cadastro } from 'src/app/shared';

@Injectable({
  providedIn: 'root'
})
export class RelatoriosService {
  constructor() { }


  async getRelatorio(): Promise<ClienteRelatorio[]> {
    let response = await RequestMaker.getData<Cadastro[]>("/cadastro/get/clientes");
    let clientes: ClienteRelatorio[] = [];
    if (response.ok(response.data)) {
      response.data.forEach((cadastro, index) => {
        let cliente: ClienteRelatorio = {
          "cpf": cadastro.cpf,
          "email": cadastro.email,
          "nome": cadastro.nome,
          "number": index,
          "telefone": cadastro.telefone
        }
        clientes.push(cliente);
      })
      return clientes;
    } else {
      return clientes;
    }
  }

  async getTopClientes(): Promise<TopCliente[]> {
    let response = await RequestMaker.getData<TopCliente[]>("/cadastro/get/topcadastros");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }
}
}


  }

}
