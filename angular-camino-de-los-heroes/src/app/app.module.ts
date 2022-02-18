import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'; /* Hay que importar este para usar ngModel */
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetallesHeroeComponent } from './detalles-heroe/detalles-heroe.component';
/* Servicios */
import { HeroeService } from './heroe.service';
import { MensajesComponent } from './mensajes/mensajes.component';
import { AppRutaModule } from './app-ruta.module';
/* Servidor */
import {HttpClientModule} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { BuscarHeroeComponent } from './buscar-heroe/buscar-heroe.component';
/* import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';
import { InMemoryWebApiModule } from 'angular-in-memory-web-api'; 
 */

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    DetallesHeroeComponent,
    MensajesComponent,
    DashboardComponent,
    BuscarHeroeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    /* necesarios para uso de ngModel */
    BrowserModule,
    FormsModule,
    AppRutaModule,
    HttpClientModule,
    HttpHeaders,
  ],
  providers: [HeroeService], /* Ahora heroe service debe estar disponible en todo el proyecto */
  bootstrap: [AppComponent]
})


export class AppModule { }
