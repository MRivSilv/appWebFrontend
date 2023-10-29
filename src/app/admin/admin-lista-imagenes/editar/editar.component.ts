import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Imagen } from 'src/app/modelos/imagen';
import { ImagenService } from 'src/app/servicios/imagen.service';

@Component({
  selector: 'ng-editar',
  templateUrl: './editar.component.html',
  styleUrls: ['./editar.component.css']
})
export class EditarComponent implements OnInit {
  imagen!: Imagen; 
  editarForm: FormGroup;  // Define la propiedad editarForm

  constructor(
    private route: ActivatedRoute,
    private imagenService: ImagenService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.editarForm = this.formBuilder.group({
      nombre: '',
      descripcion: '',
      genero: '',
      autor: '',
      enlace_miniatura: '',
      enlace_grande: '',
    });
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.imagenService.getImagenParaEditar(id!).subscribe((imagen) => {
      this.imagen = imagen;
      
      // Llena el formulario con los valores actuales de la imagen
      this.editarForm = this.formBuilder.group({
        nombre: imagen.nombre,
        descripcion: imagen.descripcion,
        genero: imagen.genero,
        autor: imagen.autor,
        enlace_miniatura: imagen.enlace_miniatura,
        enlace_grande: imagen.enlace_grande
      });
    });
  }

  guardarCambios() {
    this.imagenService.editarImagen(this.imagen.id, this.editarForm.value).subscribe(
      () => {
        console.log('Imagen editada con éxito');
        this.router.navigate(['/admin/imagenes'])
      },
      (error) => {
        console.error('Error al editar la imagen', error);
      }
    );
  }
  cancelarEdicion() {
    this.router.navigate(['/admin/imagenes']);
  }
}
