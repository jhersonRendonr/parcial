import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesFielesComponent } from './componentes/clientes-fieles/clientes-fieles.component';
import { ClientesNuestrosComponent } from './componentes/clientes-nuestros/clientes-nuestros.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';


const routes: Routes = [
  {
    path: 'clientesFieles', component: ClientesFielesComponent     
  },
  {
    path: 'clientes', component: ClientesComponent
  },
  {
    path: 'clientesnuestros', component: ClientesNuestrosComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
