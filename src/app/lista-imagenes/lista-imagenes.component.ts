import { Component, OnInit } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { ImagenService } from '../servicios/imagen.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetalleImagenComponent } from './galeria/detalle-imagen/detalle-imagen.component';
import { MatDialogRef } from '@angular/material/dialog';
@Component({
  selector: 'ng-lista-imagenes',
  templateUrl: './lista-imagenes.component.html',
  styles: [`.imagen-cuadro{
      margin-bottom: 10px;
      max-width: 250px; 
      margin: 0 auto; 
      padding: 10px; 
  }
  .imagen-nombre{
 
    margin-bottom: 10px;
    max-width: 250px;
    margin-left: 105px;
  }`
  ]
})
export class ListaImagenesComponent implements OnInit{
  imagenes!: Observable<Imagen[]>;
  selectedImagen!: Imagen;

  constructor(private imagenservice:ImagenService, public dialog:MatDialog){}
  ngOnInit(): void {
    this.imagenes = this.imagenservice.getImagenes();
  }
  onSelect(imagen:Imagen): void{
    this.dialog.open(DetalleImagenComponent, {
      width: '1000px',
      data: {imagen: this.selectedImagen }
    });
  }
}
