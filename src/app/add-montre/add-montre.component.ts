import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Montre } from '../model/montre.model';
import { MontreService } from '../services/montre.service';
import { Categorie } from '../model/categorie.model';
import { ActivatedRoute,Router } from '@angular/router';
import { Observable } from 'rxjs';


@Component({
  selector: 'app-add-montre',
  templateUrl: './add-montre.component.html',
 styleUrls: ['./add-montre.component.css'],

})
export class AddMontreComponent implements OnInit {
  newMontre= new Montre();
  categories : Categorie[];
  newIdCat : number;
  newNomCat :string;
  newCategorie : Categorie;
  newidc :number;
  jsn :String;

  constructor(private montreService: MontreService,
    private activatedRoute: ActivatedRoute,
    private router :Router) { }

  addMontre(p:Montre ){
  this.jsn='{"nomMontre":"'+p.nomMontre+'","prixMontre":'+p.prixMontre+',"categorie":{"idCat":'+this.newIdCat+'}}';
  this.montreService.ajouterMontre(this.jsn) ;
 }
 
  ngOnInit() {
   this.montreService.listeCategories().subscribe(prods => {
    console.log(prods);
    this.categories= prods;
    });

  }

  onChange() {
     
    }
   

}
