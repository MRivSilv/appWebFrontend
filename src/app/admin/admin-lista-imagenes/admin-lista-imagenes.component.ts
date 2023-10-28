import { Component, OnInit } from '@angular/core';

import { Imagen } from 'src/app/modelos/imagen';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
@Component({
  selector: 'ng-admin-lista-imagenes',
  templateUrl: './admin-lista-imagenes.component.html',
  styleUrls: ['./admin-lista-imagenes.component.css']
})
export class AdminListaImagenesComponent implements OnInit{
  imagenes!: Observable<Imagen[]>;
  constructor(private router: Router, private imagenservice:ImagenService){}
  ngOnInit(): void {
    this.imagenes = this.imagenservice.getImagenes();
  }
  eliminarImagen(id: string) {
    if (confirm('¿Estás seguro de que deseas eliminar esta imagen?')) {
      this.imagenservice.deleteImagen(id).subscribe(
        () => {
          console.log('Imagen eliminada con éxito');
          this.router.navigate(['/admin']);
        },
        (error) => {
          console.error('Error al eliminar la imagen', error);
        }
      );
    }
  }
}
