import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AutocadastroModule } from './autocadastro';
import { ConsultaPedidoModule } from './consulta-pedido';
import { LoginModule } from './login/login.module';
import { OrcamentoModule } from './orcamento';
import { PagamentoModule } from './pagamento';
import { PaginaInicialModule } from './pagina-inicial';
import { PedidoModule } from './pedido';
import { CrudRoupasModule } from './crud-roupas';
import { ListagemModule } from './listagem';
import { CommonModule } from '@angular/common';
import { FuncionarioModule } from './funcionario';
import { RelatoriosModule } from './relatorios';
import { FormsModule } from '@angular/forms';
import { ListagemFModule } from './listagemF';


/* Aonde está escrito o nome do componente no import é para substituir com o nome do componente que vc criou 
  Exemplo: Se vc criou o componente esta com o login é para substituir o "LoginComponent" pelo nome do componente que vc criou. 
*/

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    LoginModule,
    AutocadastroModule,
    ConsultaPedidoModule,
    OrcamentoModule,
    PagamentoModule,
    PaginaInicialModule,
    PedidoModule,
    PedidoModule,
    CrudRoupasModule,
    ListagemModule,
    ListagemFModule,
    FormsModule,
    FuncionarioModule,
    RelatoriosModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
