import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListagemComponent } from './listagem/listagem.component';
import { AutocadastroComponent } from './autocadastro';
import { ConsultaPedidoComponent } from './consulta-pedido';
import { LoginComponent } from './login';
import { OrcamentoComponent } from './orcamento';
import { PagamentoComponent } from './pagamento';
import { PaginaInicialComponent } from './pagina-inicial';
import { ListarPedidosAbertosComponent } from './pagina-inicial-funcionario';
import { PedidoComponent } from './pedido';
import { ListarRoupasComponent } from './crud-roupas/listar-roupas';
import { InserirRoupaComponent } from './crud-roupas/inserir-roupa';
import { EditarRoupaComponent } from './crud-roupas/editar-roupa';


const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full'},
    
  { path: 'autocadastro',
    redirectTo: 'autocadastro/autocadastro'},
  { path: 'autocadastro/autocadastro',
    component: AutocadastroComponent },

  { path: 'consulta-pedido',
    redirectTo: 'consulta-pedido/consulta-pedido'},
  { path: 'consulta-pedido/consulta-pedido',
    component: ConsultaPedidoComponent },

  { path: 'login',
    redirectTo: 'login/login'},
  { path: 'login/login',
    component: LoginComponent },

  { path: 'orcamento',
    redirectTo: 'orcamento/orcamento'},
  { path: 'orcamento/orcamento',
    component: OrcamentoComponent },

  { path: 'listagem',
    redirectTo: 'listagem/listagem'},
  { path: 'listagem/listagem',
    component: ListagemComponent },

  { path: 'pagamento',
    redirectTo: 'pagamento/pagamento'},
  { path: 'pagamento/pagamento',
    component: PagamentoComponent },

  { path: 'pagina-inicial',
    redirectTo: 'pagina-inicial/pagina-inicial'},
  { path: 'pagina-inicial/pagina-inicial',
    component: PaginaInicialComponent },

  { path: 'pagina-inicial-funcionario',
    redirectTo: 'pagina-inicial-funcionario/listar-pedidos-aberto'},
  { path: 'pagina-inicial-funcionario/listar-pedidos-aberto',
    component: ListarPedidosAbertosComponent },

  { path: 'pedido',
    redirectTo: 'pedido/pedido'},
  { path: 'pedido/pedido',
   
    component: PedidoComponent },
  
    //CRUD Roupas
  { path: 'roupas', redirectTo: 'roupas/listar-roupas'},
  { path: 'roupas/listar-roupas', component: ListarRoupasComponent},
  { path: 'roupas/novo', component: InserirRoupaComponent},
  { path: 'roupas/editar/:id', component: EditarRoupaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
