import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudiantesComponent } from './estudiantes/estudiantes.component';
import { PersonajesComponent } from './personajes/personajes.component';
import { HomeComponent } from './home/home.component';
import { ProfesoresComponent } from './profesores/profesores.component';

const routes: Routes = [
  {
    path:'',
    component:HomeComponent
  },
  {
    path:'personajes/:casaHechiceria',
    component:PersonajesComponent
  },
  {
    path:'estudiantes',
    component:EstudiantesComponent
  },
  {
    path: 'profesores',
    component:ProfesoresComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
