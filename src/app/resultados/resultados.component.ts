import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ImagenService } from '../servicios/imagen.service';
import { Imagen } from '../modelos/imagen';
import { MatDialog } from '@angular/material/dialog';
import { DetalleImagenComponent } from '../lista-imagenes/galeria/detalle-imagen/detalle-imagen.component';
@Component({
  selector: 'ng-resultados',
  templateUrl: './resultados.component.html',
  styleUrls: ['./resultados.component.css']
})
export class ResultadosComponent implements OnInit {
  resultados: Imagen[] = [];
  keyword!: string; // Nueva propiedad para almacenar la palabra clave

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService,
    private dialog: MatDialog
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((params) => {
      this.keyword = params['q']; // Asignar la palabra clave a la propiedad
      if (this.keyword) {
        // Realizar la búsqueda en la base de datos
        this.imagenService.searchImagenes(this.keyword).subscribe((resultados) => {
          this.resultados = resultados;
        });
      }
    });
  }
  onSelect(imagen:Imagen): void{
    this.dialog.open(DetalleImagenComponent, {
      data: {imagen: imagen},
      maxWidth:1000
    });
    
  }
}