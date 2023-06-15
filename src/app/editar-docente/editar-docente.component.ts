import { Component } from '@angular/core';
import { DocenteComponent } from '../docente/docente.component';
import { DOCENTE } from '../lista-docente';
import { Docente } from '../docente';

@Component({
  selector: 'app-editar-docente',
  templateUrl: './editar-docente.component.html',
  styleUrls: ['./editar-docente.component.css']
})
export class EditarDocenteComponent {
 docentes = DOCENTE;

 selectd?:Docente;

 onseleccion(docente:Docente):void{
  this.selectd=docente;
}


}
