import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './heroes/heroes.component';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DetallesHeroeComponent } from './detalles-heroe/detalles-heroe.component';

export const RUTAS: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'heroes', component: HeroesComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detalle/:id', component: DetallesHeroeComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})
export class AppRutaModule { }
