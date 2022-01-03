import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MontresComponent } from './montres/montres.component';
import { AddMontreComponent } from './add-montre/add-montre.component';
import { FormsModule } from '@angular/forms';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    MontresComponent,
    AddMontreComponent,
    UpdateMontreComponent,
    RechercheParCategorieComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
