import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { SharedModule } from '../shared/shared.module';
import { MatCardModule } from '@angular/material/card'; 
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    AuthComponent,
    LoginComponent,
    RegistroComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatCardModule,
    RouterModule
  ]
})
export class AuthModule { }
