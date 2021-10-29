import {Injectable, EventEmitter} from '@angular/core';
import {Recipe} from "./recipe.model";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list/shopping-list.service";

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Test recipe', 'This is a test recipe',
      'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
      [new Ingredient('Potato', 2)]),
    new Recipe('Test recipe 2', 'This is a test recipe 2',
      'https://www.biggerbolderbaking.com/wp-content/uploads/2019/07/15-Minute-Pizza-WS-Thumbnail.png',
      [new Ingredient('Tomato', 2)])
  ];
  recipeChosen = new EventEmitter<Recipe>();

  constructor(private shoppingListService: ShoppingListService) {
  }

  getRecipe(id: number) {
    return this.recipes[id]
  }

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListService.addIngredients(ingredients);
  }
}
