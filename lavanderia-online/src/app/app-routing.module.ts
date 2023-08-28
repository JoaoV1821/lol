import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ConsultaPedidoComponent } from './consulta-pedido';
import { ListarPedidosAbertosComponent } from './pagina-inicial-funcionario';


const routes: Routes = [
  { path: '',
    redirectTo: '',
    pathMatch: 'full'},
  
  { path: 'consulta-pedido',
    redirectTo: 'consulta-pedido/consulta-pedido'},
  { path: 'consulta-pedido/consulta-pedido',
    component: ConsultaPedidoComponent },

  { path: 'pagina-inicial-funcionario',
    redirectTo: 'pagina-inicial-funcionario/listar-pedidos-aberto'},
  { path: 'pagina-inicial-funcionario/listar-pedidos-aberto',
    component: ListarPedidosAbertosComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
