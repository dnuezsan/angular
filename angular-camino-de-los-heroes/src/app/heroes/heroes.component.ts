import { Component, OnInit } from '@angular/core';
import {Heroe} from "../heroe";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {

  heroe: Heroe={
    id:1,
    nombre:'Winstorm'
  };

  constructor() { }

  ngOnInit(): void {
  }

}
