import { Component, OnInit } from '@angular/core';
import { Observable, observable, Subject } from 'rxjs';
import {debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';
import { Heroe } from '../heroe';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-buscar-heroe',
  templateUrl: './buscar-heroe.component.html',
  styleUrls: ['./buscar-heroe.component.css']
})
export class BuscarHeroeComponent implements OnInit {

  heroes$! : Observable<Heroe[]>;
  
  private terminosBusqueda = new Subject<string>();

  constructor(private heroeServicio : HeroeService) { 
    
  }

  ngOnInit(): void {
    this.heroes$ = this.terminosBusqueda.pipe(
      debounceTime(300),

      distinctUntilChanged(),

      switchMap((term:string)=>this.heroeServicio.buscarHeroes(term)),
    );
  }

  buscar(term: string): void{
      this.terminosBusqueda.next(term)
  }

}
