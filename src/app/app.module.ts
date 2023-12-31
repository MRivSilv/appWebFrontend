import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImagenService } from './servicios/imagen.service';

import { AdminComponent } from './admin/admin.component';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar.component';
import { GaleriaComponent } from './lista-imagenes/galeria/galeria.component';
import { ListaImagenesComponent } from './lista-imagenes/lista-imagenes.component';
import { ImagenComponent } from './lista-imagenes/imagen/imagen.component';
import { DetalleImagenComponent } from './lista-imagenes/galeria/detalle-imagen/detalle-imagen.component';
import { ContactoComponent } from './lista-imagenes/contacto/contacto.component';
import { AcercadeComponent } from './lista-imagenes/acercade/acercade.component';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AdminListaImagenesComponent } from './admin/admin-lista-imagenes/admin-lista-imagenes.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { FormsModule } from '@angular/forms';
import { AdminCrearImagenComponent } from './admin/admin-crear-imagen/admin-crear-imagen.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { ResultadosComponent } from './resultados/resultados.component';
import { EditarComponent } from './admin/admin-lista-imagenes/editar/editar.component';
import { BorrarComponent } from './admin/admin-lista-imagenes/borrar/borrar.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    GaleriaComponent,
    ListaImagenesComponent,
    ImagenComponent,
    DetalleImagenComponent,
    ContactoComponent,
    AcercadeComponent,
    AdminComponent,
    AdminListaImagenesComponent,
    DashboardComponent,
    AdminCrearImagenComponent,
    ResultadosComponent,
    EditarComponent,
    BorrarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatDialogModule,
    ReactiveFormsModule
  ],
  providers: [ImagenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
