import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// Modules
import { CoreRoutingModule } from './core-routing.module';
// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { HomeComponent } from './home/home.component';
import { MatCardModule } from '@angular/material/card';
// Components
import { NavbarComponent } from './navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HomeComponent,
    RegisterComponent,
    LoginComponent
  ],
  imports: [
    CommonModule,
    CoreRoutingModule,
    MatToolbarModule,
    MatIconModule,
    MatCardModule
  ],
  exports: [
    NavbarComponent,
    HomeComponent
  ]
})
export class CoreModule { }
