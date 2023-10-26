import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Imagen } from 'src/app/modelos/imagen';

@Component({
  selector: 'ng-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.css']
})
export class DetalleImagenComponent implements OnInit {
  selectedImagen!: Imagen; 
  constructor(
    @Inject(MAT_DIALOG_DATA) data: any,
    public dialogRef: MatDialogRef<DetalleImagenComponent>
  ) {
    console.log(data.imagen);
    this.selectedImagen = data.imagen;
  }

  ngOnInit(): void {

  }
}







