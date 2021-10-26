import {Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipe.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test recipe', 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png'),
    new Recipe('Test recipe 2', 'This is a test recipe 2', 'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png')
  ];

  @Output()
  recipeChosen = new EventEmitter<Recipe>();

  constructor() { }

  ngOnInit(): void {
  }


  onRecipeChosen(recipe: Recipe) {
    this.recipeChosen.emit(recipe);
  }
}
