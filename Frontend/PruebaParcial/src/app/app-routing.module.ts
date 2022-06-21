import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateJugadorComponent } from './create-jugador/create-jugador.component';
import { HomeComponent } from './home/home.component';
import { JugadorFormComponent } from './jugador/jugador-form/jugador-form.component';
import { JugadorComponent } from './jugador/jugador.component';

const routes: Routes = [
  {path: "listaJugadores", component : JugadorComponent},
  {path: "listaJugadores/form", component : JugadorFormComponent},
  {path: "listaJugadores/form/:id", component : JugadorFormComponent},
  {path: "**", component : HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
