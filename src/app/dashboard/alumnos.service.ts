import { Injectable } from '@angular/core';
import { Alumno } from './models/modelalumno';



@Injectable({
  providedIn: 'root'
})
export class AlumnosService {

  
  private alumnos: Alumno[] = []

  constructor() { }

  obtenerAlumnos(): Alumno[] {
    return this.alumnos
  }







}
