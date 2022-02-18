import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
/* import { subscribeOn } from 'rxjs'; */
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';
import { MensajesService } from '../mensajes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  /* heroe:Heroe={
    id:1,
    nombre:'tac'
  }; */

  public heroes: Heroe[] = [];
  /*   public heroeElegido?: Heroe; */

  constructor(private heroeService: HeroeService, private mensajes_servicio: MensajesService) {

  }


  ngOnInit(): void {
    this.obtenerHeroes();
  }

  /* seleccion(heroe:Heroe):void{
    this.heroeElegido = heroe;
    this.mensajes_servicio.aniadir(`Este heroe ha sido escogido por el jugador: id del heroe: ${heroe.id}`)
  } */

  obtenerHeroes(): void {
    this.heroeService.obtenerHeroes()
      .subscribe(heroes => this.heroes = heroes)
  }

  borrar(heroe: Heroe):void{
    this.heroes = this.heroes.filter(h=>h !== heroe);
    this.heroeService.borrarHeroe(heroe.id).subscribe();
  }

  aniadir(nombre : string):void {
    this.heroeService.obtenerHeroes()
    .subscribe(heroes=>this.heroes)
  }

}
