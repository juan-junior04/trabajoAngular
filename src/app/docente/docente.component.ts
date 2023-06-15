import { Component } from '@angular/core';
import { DOCENTE } from '../lista-docente';
import { Docente } from '../docente';

@Component({
  selector: 'app-docente',
  templateUrl: './docente.component.html',
  styleUrls: ['./docente.component.css']
})
export class DocenteComponent {
  docentes = DOCENTE;

  selectd?:Docente;

  onseleccion(docente:Docente):void{
    this.selectd=docente;
  }

  
}
