import { Component, OnInit, Input, Inject } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'ng-detalle-imagen',
  templateUrl: './detalle-imagen.component.html',
  styleUrls: ['./detalle-imagen.component.css']
})
export class DetalleImagenComponent implements OnInit{
  @Input() selectedImagen!: any;
  constructor(
    public dialogRef: MatDialogRef<DetalleImagenComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) {}

  ngOnInit(): void {
   
  }
}

