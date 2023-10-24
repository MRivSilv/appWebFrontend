import { Component, OnInit, Input } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen';

@Component({
  selector: 'ng-imagen',
  templateUrl: './imagen.component.html',
  styles:[`img {
    -webkit-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
    box-shadow: 0px 1px 6px 1px rgba(0, 0, 0, 0.75);
  
  }
  img:hover {
    filter: gray;
    -webkit-filter: grayscale(1);
  }`]
})
export class ImagenComponent implements OnInit{
  @Input() imagenComponenteImagen!: Imagen;
  constructor(){}
  ngOnInit(): void {
  }
}
