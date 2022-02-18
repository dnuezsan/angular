import { Component, OnInit } from '@angular/core';
import { HeroeService } from '../heroe.service';
import { Heroe } from '../heroe';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  heroes:Heroe[] = []

  constructor(private heroeServicio : HeroeService) {}

  ngOnInit(): void {
    this.obtenerHeroes()
  }

  obtenerHeroes():void{
    this.heroeServicio.obtenerHeroes()
    .subscribe(heroes=>this.heroes = heroes.slice(1,5))
  }

  
}
