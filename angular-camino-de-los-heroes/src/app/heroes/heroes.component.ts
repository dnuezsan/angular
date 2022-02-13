import { Component, OnInit } from '@angular/core';
import { Heroe } from '../heroe';
import { HEROES } from '../heroes-simulados';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroe: Heroe={
    id:1,
    nombre:'Windstorm',
  };

  heroes = HEROES;

  constructor() { }

  ngOnInit(): void {
  }

}
