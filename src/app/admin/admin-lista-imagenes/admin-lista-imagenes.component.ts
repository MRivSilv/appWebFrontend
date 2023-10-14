import { Component, OnInit } from '@angular/core';

import { Imagen } from 'src/app/modelos/imagen';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'ng-admin-lista-imagenes',
  templateUrl: './admin-lista-imagenes.component.html',
  styleUrls: ['./admin-lista-imagenes.component.css']
})
export class AdminListaImagenesComponent implements OnInit{
  imagenes!: Observable<Imagen[]>;
  constructor(private imagenservice:ImagenService){}
  ngOnInit(): void {
    this.imagenes = this.imagenservice.getImagenes();
  }

}
