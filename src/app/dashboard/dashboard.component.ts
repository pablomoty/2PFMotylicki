import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { AlumnosService } from './alumnos.service';
import { Alumno } from './models/modelalumno';





@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent {

  public alumnos: Alumno[] = []


  showFiller = false;




  constructor(private matDialog: MatDialog, private AlumnosService: AlumnosService ) {

           

   }



  abrirFormulario(): void {
    const dialogref = this.matDialog.open(FormularioComponent)

    dialogref.afterClosed().subscribe({
      next: (valor) => {
        if (valor) {

          this.alumnos = [
            ...this.alumnos, {
              id: this.alumnos.length + 1,
              nombre: valor.nombre,
              apellido: valor.apellido,
              email: valor.email,
              curso: valor.curso,
              genero: valor.genero
            }
          ]


          console.log('recibido', valor)
        }
        else {
          console.log('cancelado')
        }

      }
    })
  }


  borrarAlumno(alumno: Alumno): void {
    console.log(alumno)
    if (confirm(`Esta seguro de eliminar a ${alumno.nombre}?`)) {
      this.alumnos = this.alumnos.filter((u) => u.id !== alumno.id)
    }
  }
  
  editarAlumno(): void {
    const dialogref = this.matDialog.open(FormularioComponent)

    dialogref.afterClosed().subscribe({
      next: (valor) => {
        if (valor) {

          this.alumnos = [
            ...this.alumnos, {
              id: this.alumnos.length + 1,
              nombre: valor.nombre,
              apellido: valor.apellido,
              email: valor.email,
              curso: valor.curso,
              genero: valor.genero
            }
          ]


          console.log('recibido', valor)
        }
        else {
          console.log('cancelado')
        }

      }
    })
  }
}

