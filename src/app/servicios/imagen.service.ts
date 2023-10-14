import { Injectable } from '@angular/core';
import { Imagen } from '../modelos/imagen';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

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
}

