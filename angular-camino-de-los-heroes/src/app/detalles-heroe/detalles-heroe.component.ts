import { Component, OnInit, Input } from '@angular/core';
import { Heroe } from '../heroe';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroeService } from '../heroe.service';

@Component({
  selector: 'app-detalles-heroe',
  templateUrl: './detalles-heroe.component.html',
  styleUrls: ['./detalles-heroe.component.css']
})
export class DetallesHeroeComponent implements OnInit {

  @Input() heroe?: Heroe;


  constructor(
    private ruta: ActivatedRoute,
    private heroeServicio: HeroeService,
    private localizacion: Location) { }

  ngOnInit(): void {
    this.obtenerHeroe()
  }

  obtenerHeroe() {
    const id = parseInt(this.ruta.snapshot.paramMap.get('id')!, 10)
    this.heroeServicio.obtenerHeroe(id)
      .subscribe(heroe => this.heroe = heroe)
  }

  irAtras(): void {
    this.localizacion.back()
  }

  guardar(): void {
    if (this.heroe) {
      this.heroeServicio.actualizarHeroe(this.heroe)
        .subscribe(() => this.irAtras());
    }
  }

}
