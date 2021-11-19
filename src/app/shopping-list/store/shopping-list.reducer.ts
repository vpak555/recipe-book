import {
  ShoppingListActions,
  ShoppingListActionTypes
} from "./shopping-list.actions";
import {Ingredient} from "../../shared/ingredient.model";
import {Action} from "@ngrx/store";

export interface State {
  ingredients: Ingredient[];
  editedIngredient: Ingredient;
  editedIngredientIndex: number;
}

export interface AppState {
  shoppingList: State
}

const initialState = {
  ingredients: [new Ingredient('Apples', 5), new Ingredient('Oranges', 10)],
  editedIngredient: null as any,
  editedIngredientIndex: -1
}

export function shoppingListReducer(state = initialState, action: Action) {
  const shoppingListAction = action as ShoppingListActions;
  switch (action.type) {
    case ShoppingListActionTypes.ADD_INGREDIENT:
      return {
        ...state,
        ingredients: [...state.ingredients, shoppingListAction.payload as Ingredient]
      };
    case ShoppingListActionTypes.ADD_INGREDIENTS:
      return {
        ...state,
        ingredients: [...state.ingredients, ...(shoppingListAction.payload as Ingredient[])]
      };
    case ShoppingListActionTypes.UPDATE_INGREDIENT:
      const ingredient = state.ingredients[state.editedIngredientIndex];
      const updatedIngredient = {...ingredient, ...(shoppingListAction.payload as Ingredient)};
      const updatedIngredients = [...state.ingredients];
      updatedIngredients[state.editedIngredientIndex] = updatedIngredient;
      return {
        ...state,
        ingredients: updatedIngredients,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.DELETE_INGREDIENT:
      return {
        ...state,
        ingredients: state.ingredients.filter((value, index) => {
          return state.editedIngredientIndex != index;
        }),
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    case ShoppingListActionTypes.START_EDITING:
      const index = shoppingListAction.payload as number;
      return {
        ...state,
        editedIngredient: {...state.ingredients[index]},
        editedIngredientIndex: index
      };
    case ShoppingListActionTypes.STOP_EDITING:
      return {
        ...state,
        editedIngredient: null,
        editedIngredientIndex: -1
      };
    default:
      return state;
  }
}
