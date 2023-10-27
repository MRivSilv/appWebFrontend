import { Injectable } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  constructor(private http:HttpClient) { }
  getImagenes(): Observable<Imagen[]>{
    return this.http.get<Imagen[]>('http://laravel.test/api/v1/imagenes');
  }
  addImagen(imagen:Object): Observable<Imagen[]>{
    return this.http.post<Imagen[]>('http://laravel.test/api/v1/imagenes', imagen);
  }
  searchImagenes(keyword: string): Observable<Imagen[]>{
    return this.getImagenes().pipe(map(imagenes => imagenes.filter(imagen =>
        this.contienePalabraClave(imagen, keyword))
      )
    );
  }
  private contienePalabraClave(imagen: Imagen, keyword: string): boolean {
    return (
      imagen.nombre.toLowerCase().includes(keyword.toLowerCase()) ||
      imagen.descripcion.toLowerCase().includes(keyword.toLowerCase()) ||
      imagen.genero.toLowerCase().includes(keyword.toLowerCase()) ||
      imagen.autor.toLowerCase().includes(keyword.toLowerCase())
    );
  }
}

