import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { RegistrationComponent } from './pages/auth/registration/registration.component';
import { CheckboxModule } from 'primeng/checkbox';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TicketsComponent } from './pages/tickets/tickets.component';

@NgModule({
  declarations: [AppComponent, TicketsComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    CheckboxModule,
    InputTextModule,
    PaginatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  //exports: [RegistrationComponent],
})
export class AppModule {}
