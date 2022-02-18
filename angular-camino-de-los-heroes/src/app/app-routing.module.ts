import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RUTAS } from './app-ruta.module';

const routes: Routes = RUTAS;


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
