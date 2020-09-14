import { UserService } from './services/user.service';
import { CoreRoutingModule } from './core/core-routing.module';
import { CoreModule } from './core/core.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    CoreRoutingModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    CoreModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
