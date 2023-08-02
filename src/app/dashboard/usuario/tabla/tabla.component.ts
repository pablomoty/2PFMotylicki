import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Alumno } from '../../models/modelalumno';




@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})



export class TablaComponent {

  displayedColumns: string[] = ['id', 'nombre', 'apellido', 'email', 'curso', 'genero', 'acciones'];

  @Input()
  dataSource: Alumno[] = []

  @Output()
  borrarAlumno = new EventEmitter<Alumno>()

  @Output()
  editarAlumno = new EventEmitter<Alumno>()
}
