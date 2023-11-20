//import jsPDF
import { Injectable } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { ClienteRelatorio } from '../relatorios';
import { TopCliente } from 'src/app/shared/models/top-cliente.model';
import { Cadastro } from 'src/app/shared';
import { underline } from 'pdfkit';

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
      console.log(response.data);
      return [];
    }
  }

  async getReceita(data1: string, data2: string): Promise<number> {
    let response;
    if (this.dataVazia(data1) && this.dataVazia(data2)) {
      response = await RequestMaker.getData<number>("/pedido/get/receita");
    } else if (this.dataVazia(data1)) {
      response = await RequestMaker.getData<number>("/pedido/get/receita?dataFinal=" + data2);
    } else if (this.dataVazia(data2)) {
      response = await RequestMaker.getData<number>("/pedido/get/receita?dataInicial=" + data1);
    } else {
      response = await RequestMaker.getData<number>("/pedido/get/receita?dataInicial=" + data1 + "&dataFinal=" + data2);
    }
    console.log(response);
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return 0;
    }
  }
  private dataVazia(data: string) {
    return data == "" || data == undefined || data == null || data.length == 0
  }

}




