import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
<<<<<<< HEAD
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { AutocadastroModule } from './autocadastro';
import { ConsultaPedidoModule } from './consulta-pedido';
import { LoginModule } from './login/login.module';
import { OrcamentoModule } from './orcamento';
import { PagamentoModule } from './pagamento';
import { PaginaInicialModule } from './pagina-inicial';
import { PedidoModule } from './pedido';
=======
import { AppComponent } from './app.component';
import { AutocadastroComponent } from './autocadastro/autocadastro.component';
import { LoginComponent } from './login/login.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { PedidoComponent } from './pedido/pedido.component';
import { OrcamentoComponent } from './orcamento/orcamento.component';
import { HeaderComponent } from './pedido/header/header.component';
import { CategoriaComponent } from './pedido/categoria/categoria.component';
import { PagamentoComponent } from './pagamento/pagamento/pagamento.component';
import { ListagemComponent } from './listagem/listagem.component';
import { VisualizacaoComponent } from './visualizacao/visualizacao.component';
import { FormsModule } from '@angular/forms';
import { PrototiposModule } from './prototipos/prototipos.module';
import { Modalrf012Component } from './modalrf012/modalrf012.component';

>>>>>>> ef40c2d51e90d81c49add8296205cb25ef1d4124

/* Aonde está escrito o nome do componente no import é para substituir com o nome do componente que vc criou 
  Exemplo: Se vc criou o componente esta com o login é para substituir o "LoginComponent" pelo nome do componente que vc criou. 
*/

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    LoginModule,
    AutocadastroModule,
    ConsultaPedidoModule,
    OrcamentoModule,
    PagamentoModule,
    PaginaInicialModule,
    PedidoModule

=======
    AutocadastroComponent,
    LoginComponent,
    PaginaInicialComponent,
    PedidoComponent,
    OrcamentoComponent,
    HeaderComponent,
    CategoriaComponent,
    PagamentoComponent,
    ListagemComponent
    VisualizacaoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
    Modalrf012Component,
    PrototiposModule
>>>>>>> ef40c2d51e90d81c49add8296205cb25ef1d4124
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
