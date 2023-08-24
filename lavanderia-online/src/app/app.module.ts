import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PedidoComponent } from './pedido/pedido.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { HeaderComponent } from './pedido/header/header.component';
import { CategoriaComponent } from './pedido/categoria/categoria.component';
import { ListagemComponent } from './listagem/listagem.component';

/* Aonde está escrito o nome do componente no import é para substituir com o nome do componente que vc criou 
  Exemplo: Se vc criou o componente esta com o login é para substituir o "LoginComponent" pelo nome do componente que vc criou. 
*/

@NgModule({
  declarations: [
    AppComponent,
    AutocadastroComponent,
    LoginComponent,
    PaginaInicialComponent,
    PedidoComponent,
    OrcamentoComponent,
    HeaderComponent,
    CategoriaComponent,
    ListagemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
