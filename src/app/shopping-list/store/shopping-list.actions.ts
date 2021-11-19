import {Action} from "@ngrx/store";
import {Ingredient} from "../../shared/ingredient.model";


export enum ShoppingListActionTypes {
  ADD_INGREDIENT = 'ADD_INGREDIENT',
  ADD_INGREDIENTS = 'ADD_INGREDIENTS',
  UPDATE_INGREDIENT = 'UPDATE_INGREDIENT',
  DELETE_INGREDIENT = 'DELETE_INGREDIENT',
  START_EDITING = 'START_EDITING',
  STOP_EDITING = 'STOP_EDITING'
}

export class AddIngredient implements Action {
  type: string = ShoppingListActionTypes.ADD_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class AddIngredients implements Action {
  type: string = ShoppingListActionTypes.ADD_INGREDIENTS;

  constructor(public payload: Ingredient[]) {
  }
}

export class UpdateIngredient implements Action {
  type: string = ShoppingListActionTypes.UPDATE_INGREDIENT;

  constructor(public payload: Ingredient) {
  }
}

export class DeleteIngredient implements Action {
  type: string = ShoppingListActionTypes.DELETE_INGREDIENT;

  constructor(public payload: null) {
  }
}

export class StartEditing implements Action {
  type: string = ShoppingListActionTypes.START_EDITING;

  constructor(public payload: number) {
  }
}

export class StopEditing implements Action {
  type: string = ShoppingListActionTypes.STOP_EDITING;
  constructor(public payload: null) {
  }
}

export type ShoppingListActions =
  AddIngredient
  | AddIngredients
  | UpdateIngredient
  | DeleteIngredient
  | StartEditing
  | StopEditing;
