import { Injectable } from '@angular/core';
import {Heroe} from './heroe';
import {HEROES} from './heroes-simulados';
import { Observable, of } from 'rxjs';
import { MensajesService } from './mensajes.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroeService {

  constructor(
    private mensaje: MensajesService, 
    private http: HttpClient) {
    
   }

   private heroesUrl = 'api/heroe';

   opcionesHttp = {
    /* Debe llamarse headers */ headers : new HttpHeaders({'Content/Type' : 'application/json'})
   };

   private log(mensaje : string){
     this.mensaje.aniadir(`ServicioHeroe: ${mensaje}`)
   }

  obtenerHeroes(): Observable<Heroe[]> {
    /* const heroes = of (HEROES); */
    /* this.mensaje.aniadir('Servicio de Heroes: heroes extraidos') */
    return this.http.get<Heroe[]>(this.heroesUrl)
    .pipe(
      tap(_ => this.log('Heroes extraídos')),
      catchError(this.manejarError<Heroe[]>('obtenerHeroes', []))
    );
  }
  
  private manejarError<T>(operacion = 'operacion', resultado?: T){
    return (error:any): Observable<T> =>{
      
      console.error(error);

      this.log(`${operacion} failed: ${error.mensaje}`);

      return of (resultado as T);
    };
  }

  obtenerHeroe(id: number): Observable<Heroe> {
    /* const heroes = of (HEROES); */
    /* const heroes = HEROES.find(h=>h.id===id)!; */
    /* this.mensaje.aniadir('Servicio de Heroes: heroes extraidos') */
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get<Heroe>(url).pipe(
      tap(_=>this.log(`Heroe exrtaído id = ${id}`)),
      catchError(this.manejarError<Heroe>(`obtener heroe id = ${id}`))
    );
  }

  actualizarHeroe(heroe: Heroe) {
    return this.http.put(this.heroesUrl, heroe, this.opcionesHttp).pipe(
      tap(_=>this.log(`Heroe actualizado id = ${heroe.id}`)),
      catchError(this.manejarError<any>('Heroe actualizado'))
    );
  }

  aniadirHeroe(heroe: Heroe): Observable<Heroe>{
    return this.http.post<Heroe>(this.heroesUrl, heroe, this.opcionesHttp).pipe(
      tap((nuevoHeroe:Heroe)=>this.log(`heroe añadido w/ id = ${nuevoHeroe.id}`)),
      catchError(this.manejarError<Heroe>('añadir Heroe'))
    );
  }

  borrarHeroe(id:Number): Observable<Heroe> {
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Heroe>(url, this.opcionesHttp).pipe(
      tap(_=>this.log(`Heroe borrado id = ${id}`)),
      catchError(this.manejarError<Heroe>('Heroe borrado'))
    );
  }

  buscarHeroes(term: string): Observable<Heroe[]>{
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Heroe[]>(`${this.heroesUrl}/?nombre = ${term}`).pipe(
      tap(x=> x.length ?
        this.log(`Se encontraron heroes que coinciden con "${term}"`) :
        this.log(`No se encontró ninguna coincidencia con ${term}`),
        catchError(this.manejarError<Heroe[]>('buscarHeroes', []))
    ));
  }
}


