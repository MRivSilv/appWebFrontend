import { Component } from '@angular/core';
import { Imagen } from 'src/app/modelos/imagen';
import { ImagenService } from 'src/app/servicios/imagen.service';
import { Router } from '@angular/router';
@Component({
  selector: 'ng-admin-crear-imagen',
  templateUrl: './admin-crear-imagen.component.html',
  styleUrls: ['./admin-crear-imagen.component.css']
})
export class AdminCrearImagenComponent {
[x: string]: any;
  constructor(private router:Router, private imagenservice:ImagenService){}
  ngOnInit(): void {}
  crearImagen(imagen: Imagen){
    this.imagenservice.addImagen(imagen)
    .subscribe(imagen => 
      {
        console.log(imagen);
        this.router.navigate(['admin/imagenes']);
      },
    error => console.log(<any>error)
    );
  }
}
