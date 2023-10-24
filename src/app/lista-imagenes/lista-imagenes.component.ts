import { Component, OnInit } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { ImagenService } from '../servicios/imagen.service';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DetalleImagenComponent } from './galeria/detalle-imagen/detalle-imagen.component';
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
    margin-bottom: 10px
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
  onSelect(imagen:Imagen){
    this.selectedImagen = imagen;
    const dialogRef = this.dialog.open(DetalleImagenComponent, {
      width: '600px',
      data: { selectedImagen: imagen }
    });
  }
}
