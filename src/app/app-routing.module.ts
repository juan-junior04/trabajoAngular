import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { DocenteComponent } from './docente/docente.component';
import { EditarDocenteComponent } from './editar-docente/editar-docente.component';

const routes:Routes=[
 {path:'docentes',component:DocenteComponent},
 {path:'docentesEdit',component:EditarDocenteComponent}
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
