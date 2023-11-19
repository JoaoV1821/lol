import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListagemComponent } from './listagem/listagem';
import { AutocadastroComponent } from './autocadastro';
import { ConsultaPedidoComponent } from './consulta-pedido';
import { LoginComponent } from './auth';
import { OrcamentoComponent } from './orcamento';
import { PagamentoComponent } from './pagamento';
import { PaginaInicialComponent } from './pagina-inicial';
import { ListarPedidosAbertosComponent } from './pagina-inicial-funcionario';
import { PedidoComponent } from './pedido';
import { ListarRoupasComponent } from './crud-roupas/listar-roupas';
import { InserirRoupaComponent } from './crud-roupas/inserir-roupa';
import { EditarRoupaComponent } from './crud-roupas/editar-roupa';
import { Rf012Component } from './prototipos/rf012/rf012.component';
import { ListagemFComponent } from './listagemF';
import { EditarFuncionarioComponent, InserirFuncionarioComponent, ListarFuncionarioComponent } from './funcionario';
import { AuthGuard } from './auth/auth.guard';
import { RelatoriosComponent } from './relatorios';

export const routes: Routes = [

  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent, },
  { path: 'autocadastro', component: AutocadastroComponent },

  { path: 'home', component: PaginaInicialComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario,cliente" } },
  { path: 'home-funcionario', component: ListarPedidosAbertosComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario" } },

  { path: 'consulta-pedido', component: ConsultaPedidoComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario" } },
  { path: 'orcamento', component: OrcamentoComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario,cliente" } },
  { path: 'listagem', component: ListagemComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario,cliente" } },
  { path: 'pagamento', component: PagamentoComponent, data: { role: "admin,gerente,funcionario,cliente" } },
  { path: 'pedido', component: PedidoComponent, data: { role: "admin,gerente,funcionario,cliente" } },

  { path: 'roupas', redirectTo: 'roupas/listar' },
  { path: 'roupas/listar', component: ListarRoupasComponent, canActivate: [AuthGuard], data: { role: "admin,gerente" } },
  { path: 'roupas/novo', component: InserirRoupaComponent, canActivate: [AuthGuard], data: { role: "admin,gerente," } },
  { path: 'roupas/editar/:id', component: EditarRoupaComponent, canActivate: [AuthGuard], data: { role: "admin,gerente" } },

  { path: 'funcionario', redirectTo: 'funcionario/listar' },
  { path: 'funcionario/listar', component: ListarFuncionarioComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario" } },
  { path: 'funcionario/inserir', component: InserirFuncionarioComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario" } },
  { path: 'funcionario/editar/:cpf', component: EditarFuncionarioComponent, canActivate: [AuthGuard], data: { role: "admin,gerente,funcionario" } },
  //funcionario/inserir-funcionario
  { path: 'prop', redirectTo: 'prototipos/rf012' },
  { path: 'prototipos/rf012', component: Rf012Component },

  { path: 'listagemF', redirectTo: 'listagemF/listagemF' },
  { path: 'listagemF', component: ListagemFComponent },

  { path: 'relatorios', component: RelatoriosComponent, canActivate: [AuthGuard], data: { role: "admin,gerente" } }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
