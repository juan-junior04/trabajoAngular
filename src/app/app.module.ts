import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DocenteComponent } from './docente/docente.component';
import { FormsModule } from '@angular/forms';
import { EditarDocenteComponent } from './editar-docente/editar-docente.component';

@NgModule({
  declarations: [
    AppComponent,
    DocenteComponent,
    EditarDocenteComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
