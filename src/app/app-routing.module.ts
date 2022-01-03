import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MontresComponent } from './montres/montres.component';

import { AddMontreComponent } from './add-montre/add-montre.component';
import { UpdateMontreComponent } from './update-montre/update-montre.component';
import { RechercheParCategorieComponent } from './recherche-par-categorie/recherche-par-categorie.component';

const routes: Routes = [
{path: "montres", component : MontresComponent},
{path: "add-montre", component : AddMontreComponent},
{ path: "", redirectTo: "montres", pathMatch: "full" },
{path: "updateMontre/:id", component: UpdateMontreComponent},
{path: "rechercheParCategorie", component : RechercheParCategorieComponent}

];

 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
