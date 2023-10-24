import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GaleriaComponent } from './lista-imagenes/galeria/galeria.component';
import { ContactoComponent } from './lista-imagenes/contacto/contacto.component';
import { AcercadeComponent } from './lista-imagenes/acercade/acercade.component';
import { ModuleWithProviders } from '@angular/core';
import { AdminComponent } from './admin/admin.component';
import { adminRoutes } from './admin/admin.routes';
import { FormsModule } from '@angular/forms';
import { AdminCrearImagenComponent } from './admin/admin-crear-imagen/admin-crear-imagen.component';
import { MatDialogModule } from '@angular/material/dialog';
const appRoutes: Routes = [
  { path: '',redirectTo: '/galeria', pathMatch: 'full'},
  { path: 'galeria', component: GaleriaComponent},
  { path: 'contacto', component: ContactoComponent},
  { path: 'acercade', component: AcercadeComponent},
  { path: 'admin', component: AdminComponent, children:adminRoutes}
];


@NgModule({
  imports: [RouterModule.forRoot(appRoutes),
  MatDialogModule],
  exports: [RouterModule,
  MatDialogModule]
})
export class AppRoutingModule { }
