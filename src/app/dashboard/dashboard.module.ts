import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav'; // SIDENAV
import { MatToolbarModule } from '@angular/material/toolbar'; // TOOLBAR
import { SharedModule } from '../shared/shared.module';
import { FormularioComponent } from './usuario/formulario/formulario.component';
import { TablaComponent } from './usuario/tabla/tabla.component';
import { MatListModule } from '@angular/material/list';
import { MenulateralComponent } from './layout/menulateral/menulateral.component';
import { DetallesComponent } from './usuario/detalles/detalles.component';
import { AlumnosService } from './alumnos.service';
import { AlumnoMockService } from './mock/alumno-mock.service';







@NgModule({
  declarations: [
    DashboardComponent,
    FormularioComponent,
    TablaComponent,
    MenulateralComponent,
    DetallesComponent,



  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,

  ],
  exports: [
    DashboardComponent
  ],
  providers: [
    {
      provide: AlumnosService,
      useClass: AlumnoMockService
    }
  ]
})
export class DashboardModule { }
