import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";
import {Store} from "@ngrx/store";
import {
  AddIngredient,
  DeleteIngredient,
  StopEditing,
  UpdateIngredient
} from "../store/shopping-list.actions";
import * as fromShoppingList from "../store/shopping-list.reducer";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  @ViewChild('form')
  form!: NgForm;
  editMode: boolean = false;
  selectedIngredient!: Ingredient;
  startedEditingSub!: Subscription;

  constructor(
    private store: Store<fromShoppingList.AppState>
  ) {}

  ngOnInit(): void {
    this.startedEditingSub = this.store.select('shoppingList').subscribe(state => {
      console.log(state);
      if(state.editedIngredientIndex > -1) {
        this.editMode = true;
        this.selectedIngredient = state.editedIngredient;
        this.form.setValue({
          name: this.selectedIngredient.name,
          amount: this.selectedIngredient.amount
        });
      } else {
        this.editMode = false;
      }
    });
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    const ingredient = new Ingredient(name, amount);
    if (this.editMode) {
      this.store.dispatch(new UpdateIngredient(ingredient));
    } else {
      this.store.dispatch(new AddIngredient(ingredient));
    }
    this.onClear();
  }

  ngOnDestroy() {
    this.startedEditingSub.unsubscribe();
    this.store.dispatch(new StopEditing(null));
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
    this.store.dispatch(new StopEditing(null));
  }

  onDelete() {
    this.store.dispatch(new DeleteIngredient(null));
    this.onClear();
  }
}
