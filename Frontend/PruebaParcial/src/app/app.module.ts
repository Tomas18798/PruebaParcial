import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JugadorComponent } from './jugador/jugador.component';
import { HomeComponent } from './home/home.component';
import { CreateJugadorComponent } from './create-jugador/create-jugador.component';
import { JugadorListComponent } from './jugador/jugador-list/jugador-list.component';
import { JugadorFormComponent } from './jugador/jugador-form/jugador-form.component';

@NgModule({
  declarations: [
    AppComponent,
    JugadorComponent,
    HomeComponent,
    CreateJugadorComponent,
    JugadorListComponent,
    JugadorFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
