import { Component, OnInit } from '@angular/core';
//import { Categorie } from '../model/categorie.model';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
//import { Observable } from 'rxjs';
import { ActivatedRoute,Router } from '@angular/router';

@Component({
  selector: 'app-montres',
  templateUrl: './montres.component.html',
  styleUrls: ['./montres.component.css']
})
export class MontresComponent implements OnInit {

  montres : Montre[]; //un tableau des montres
  //categories :Categorie[];
  constructor(private montreService: MontreService , private router :Router) { 

   
      

   //this.montres = montreService.listeMontres();
  }

  ngOnInit(): void {

    this.montreService.listeMontres().subscribe(prods => {
      console.log(prods);
      this.montres= prods;
      });

    //  this.montreService.listeCategories().subscribe(prods => {
      //  console.log(prods);
        //this.categories= prods;
        //});

  }


  supprimerMontre(p: Montre)
  {
   // let conf = confirm("Etes-vous sûr ?");
   // if (conf)
   // this.montreService.supprimerMontre(p);
   //let conf = confirm(JSON.stringify( p));
   //if (conf)
   let conf = confirm("Etes-vous sûr ?");
if (conf)
this.montreService.supprimerMontre(p.idMontre).subscribe(() => {
console.log("produit supprimé");
this.SuprimerProduitDuTableau(p);
});

  }
  

  SuprimerProduitDuTableau(prod : Montre) {
    this.montres.forEach((cur, index) => {
    if(prod.idMontre=== cur.idMontre) {
    this.montres.splice(index, 1);
    }
    });
    }
    





  

}
