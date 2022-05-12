import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PartidaModule } from './partida/partida.module';
import { AperturaModule } from './apertura/apertura.module';
import { JugadorModule } from './jugador/jugador.module';
import { JugadaModule } from './jugada/jugada.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PartidaModule,
    JugadorModule,
    AperturaModule,
    JugadaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
