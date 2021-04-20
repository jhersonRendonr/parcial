import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { ClientesFielesComponent } from './componentes/clientes-fieles/clientes-fieles.component';
import { ClientesNuestrosComponent } from './componentes/clientes-nuestros/clientes-nuestros.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    ClientesFielesComponent,
    ClientesNuestrosComponent,
    ClientesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
