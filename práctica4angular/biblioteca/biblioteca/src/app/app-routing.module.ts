import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LibrosComponent } from './libros/libros.component';
import { NuevoLibroComponent } from './nuevo-libro/nuevo-libro.component';


const routes: Routes = [
  { path: 'index', component: AppComponent },
  { path: 'listaLibros', component: LibrosComponent },
  { path: 'nuevoLibro', component: NuevoLibroComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
