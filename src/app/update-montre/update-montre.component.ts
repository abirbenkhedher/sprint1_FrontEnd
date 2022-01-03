import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MontreService } from '../services/montre.service';
import { Montre } from '../model/montre.model';
import { Categorie } from '../model/categorie.model';





@Component({
  selector: 'app-update-montre',
  templateUrl: './update-montre.component.html',

  styleUrls: ['./update-montre.component.css']
})
export class UpdateMontreComponent implements OnInit {
  currentMontre = new Montre();
  categories: Categorie[];
  updatedCategorie: Categorie;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private montreService: MontreService) { }

  ngOnInit() {
    //this.categories = this.montreService.listeCategories();
    //this.currentMontre = this.montreService.consulterMontre(this.activatedRoute.snapshot.params.id);
    this.montreService.consulterMontre(this.activatedRoute.snapshot.params.id).
      subscribe(prod => { this.currentMontre = prod; });


    this.montreService.listeCategories().subscribe(prods => {
      console.log(prods);
      this.categories = prods;
    });




  }
  updateMontre() {
    this.montreService.updateMontre(this.currentMontre).subscribe(prod => {
      this.router.navigate(['montres']);
    }, (error) => { alert("Problème lors de la modification !"); }
    );

  }

}
