import { Injectable } from '@angular/core';
import { RequestMaker } from 'src/app/services/requestService';
import { Categoria } from 'src/app/shared/models/categoria.model';
import { RoupaDTO } from 'src/app/shared/models/roupa-dto.model';

import { Roupa } from 'src/app/shared/models/roupa.model';
import { roupaFormulario } from '../editar-roupa';
import { Router } from '@angular/router';

const LS_CHAVE: string = "roupas";

@Injectable({
  providedIn: 'root'
})
export class CrudRoupasService {

  constructor(private router: Router) { }


  async getRoupas(): Promise<Roupa[]> {
    let response = await RequestMaker.getData<Roupa[]>("/roupa/get/roupas");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }

  async getCategorias(): Promise<Categoria[]> {
    let response = await RequestMaker.getData<Categoria[]>("/categoria/get/categorias");
    if (response.ok(response.data)) {
      return response.data;
    } else {
      return [];
    }
  }

  listarTodos(): Roupa[] {
    const roupas = localStorage[LS_CHAVE];
    return roupas ? JSON.parse(roupas) : [];
  }
  async inserir(roupa: RoupaDTO): Promise<void> {
    let response = await RequestMaker.postData("/roupa/add/roupa", roupa);
    if (!response.ok(response.data)) {
      alert("Não foi possível adicionar a roupa!");
    }
  }

  private ajustarId(id: number): string {
    let idString = id.toString();
    while (idString.length < 4) {
      idString = "0" + idString;
    }
    return idString;
  }

  async buscarPorId(id: number): Promise<Roupa | null> {
    let idString = this.ajustarId(id);
    let response = await RequestMaker.postData<Roupa>("/roupa/get/roupa", { "numero": idString });
    if (response.ok(response.data)) {
      return response.data;
    }
    else {
      return null;
    }
  }
  async atualizar(roupa: roupaFormulario): Promise<void> {
    let response = await RequestMaker.postData("/roupa/update/roupa", roupa);
    if (response.ok(response.data)) {
      this.router.navigate(["/roupas/listar"]);
    } else {
      alert("Não foi possivel atualizar a roupa");
    }
  }
  async remover(id: string): Promise<void> {
    let response = await RequestMaker.postData("/roupa/delete/roupa", { string: id });
    if (response.ok(response.data)) {

    } else {
      alert("Não foi possível deletar a roupa !");
    }

  }


}
