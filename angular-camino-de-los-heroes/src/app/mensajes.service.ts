import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MensajesService {
  mensajes: string[] = [];

  aniadir(mensaje: string){
    this.mensajes.push(mensaje)
  }

  limpiar(){
    this.mensajes = []
  }

  constructor() { }
}
