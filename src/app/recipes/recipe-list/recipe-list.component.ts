import { Component, OnInit } from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('TestRecape','this is a recipe Test','https://cdn.apartmenttherapy.info/image/fetch/f_auto,q_auto,w_600,h_750,c_fit,fl_strip_profile/https://s3.amazonaws.com/pixtruder/original_images/9bbf07cb31d5ed6f536454f6792d96f16c7bc26b' ),
    new Recipe('TestRecape', 'this is a recipe Test', 'pita' )

  ] ;

  constructor() { }

  ngOnInit() {
  }

}
