import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarPessoaComponent, InserirPessoaComponent, ListarPessoaComponent } from './pessoa';
import { EditarEnderecoComponent, InserirEnderecoComponent, ListarEnderecoComponent } from './endereco';
import { EditarCidadeComponent, InserirCidadeComponent, ListarCidadeComponent } from './cidade';
import { EditarEstadoComponent, InserirEstadoComponent, ListarEstadoComponent } from './estado';
import { LoginRoutes } from './auth/auth-routing.module';
import { AuthGuard } from './auth/auth.guard';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'pessoas',
    redirectTo: 'pessoas/listar'
  },
  {
    path: 'pessoas/listar',
    component: ListarPessoaComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },
  {
    path: 'pessoas/novo',
    component: InserirPessoaComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },
  {
    path: 'pessoas/editar/:id',
    component: EditarPessoaComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },

  {
    path: 'enderecos',
    redirectTo: 'enderecos/listar'
  },
  {
    path: 'enderecos/listar',
    component: ListarEnderecoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },
  {
    path: 'enderecos/novo',
    component: InserirEnderecoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },
  {
    path: 'enderecos/editar/:id',
    component: EditarEnderecoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO'
    }
  },

  {
    path: 'cidades',
    redirectTo: 'cidades/listar'
  },
  {
    path: 'cidades/listar',
    component: ListarCidadeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE'
    }
  },
  {
    path: 'cidades/novo',
    component: InserirCidadeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE'
    }
  },
  {
    path: 'cidades/editar/:id',
    component: EditarCidadeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE'
    }
  },

  {
    path: 'estados',
    redirectTo: 'estados/listar'
  },
  {
    path: 'estados/listar',
    component: ListarEstadoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'estados/novo',
    component: InserirEstadoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'estados/editar/:id',
    component: EditarEstadoComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN'
    }
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard],
    data: {
      role: 'ADMIN,GERENTE,FUNCIONARIO,CLIENTE'
    }
  },
  ...LoginRoutes
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
