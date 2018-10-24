import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Recipe} from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  recipes: Recipe [] = [
    new Recipe('Ramen', 'This is how you make ramen', 'https://40aprons.com/wp-content/uploads/2016/01/bacon-ramen-6-920x613.jpg'),
    new Recipe('Ramen 2', 'Learn how to fucking make ramen', 'https://40aprons.com/wp-content/uploads/2016/01/bacon-ramen-6-920x613.jpg')
  ];

  constructor() { }

  ngOnInit() {
  }
  onrecipeSelected(recipe: Recipe) {
    this.recipeWasSelected.emit(recipe);
  }

}
