import { Routes } from '@angular/router';
import { AdminListaImagenesComponent } from './admin-lista-imagenes/admin-lista-imagenes.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AdminCrearImagenComponent } from './admin-crear-imagen/admin-crear-imagen.component';
import { EditarComponent } from './admin-lista-imagenes/editar/editar.component';

export const adminRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'imagenes', component: AdminListaImagenesComponent },
    { path: 'imagenes/crear', component: AdminCrearImagenComponent},
    { path: 'imagenes/editar/:id', component: EditarComponent},
]