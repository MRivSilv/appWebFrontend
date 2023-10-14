import { Component, OnInit } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { ImagenService } from '../servicios/imagen.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'ng-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styles: [ ]
})
export class ListaImagenesComponent implements OnInit{
  imagenes!: Observable<Imagen[]>;
  selectedImagen!: Imagen;
  constructor(private imagenservice:ImagenService){}
  ngOnInit(): void {
    this.imagenes = this.imagenservice.getImagenes();
  }
  onSelect(imagen:Imagen){
    this.selectedImagen = imagen;
  }
}
