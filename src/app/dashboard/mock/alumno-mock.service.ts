import { Alumno } from "../models/modelalumno";


export class AlumnoMockService {
    
    private alumnos: Alumno[] = [{

        id: 1,
        nombre: 'Juan',
        apellido: 'Perez',
        email: 'juanperez@gmail.com',
        curso: 'JavaScript',
        genero: 'Masculino'
        
    },
]

    obtenerAlumnos(): Alumno[] {
        return this.alumnos
      }
}