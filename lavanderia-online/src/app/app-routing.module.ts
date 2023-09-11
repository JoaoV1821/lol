import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

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
import { ListarFuncionarioComponent } from './funcionario';
import { InserirFuncionarioComponent } from './funcionario';
import { EditarFuncionarioComponent } from './funcionario';
import { RelatoriosComponent } from './relatorios';

const routes: Routes = [
  { path: '', redirectTo: '', pathMatch: 'full'},
    
  { path: 'autocadastro', component: AutocadastroComponent },

  { path: 'consulta-pedido', component: ConsultaPedidoComponent },

  { path: 'login', component: LoginComponent },

  { path: 'orcamento', component: OrcamentoComponent },

  { path: 'pagamento', component: PagamentoComponent },

  { path: 'pagina-inicial', component: PaginaInicialComponent },

  { path: 'pagina-inicial-funcionario', component: ListarPedidosAbertosComponent },

  { path: 'pedido', component: PedidoComponent },
  
  { path: 'pedido',
    redirectTo: 'pedido/pedido'},
  { path: 'pedido/pedido',
   
    component: PedidoComponent },
  
  { path: 'roupas', redirectTo: 'roupas/listar-roupas'},
  { path: 'roupas/listar-roupas', component: ListarRoupasComponent},
  { path: 'roupas/novo', component: InserirRoupaComponent},
  { path: 'roupas/editar/:id', component: EditarRoupaComponent},

  //CRUD Funcionarios
  { path: 'funcionarios', redirectTo: 'funcionarios/listar'},
  { path: 'funcionarios/listar', component: ListarFuncionarioComponent },
  { path: 'funcionarios/novo', component: InserirFuncionarioComponent },
  { path: 'funcionarios/editar/:cpf', component: EditarFuncionarioComponent},

  //Relatorios, Pagina-Funcionario
  { path: 'relatorios', component: RelatoriosComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
