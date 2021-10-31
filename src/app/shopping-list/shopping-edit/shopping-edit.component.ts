import {Component, OnInit, ViewChild, OnDestroy} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";
import {NgForm} from "@angular/forms";
import {Subscription} from "rxjs";

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
  selectedIngredientIndex!: number;
  startedEditingSub!: Subscription;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
    this.startedEditingSub = this.shoppingListService.startedEditing.subscribe(index => {
      this.selectedIngredientIndex = index;
      this.selectedIngredient = this.shoppingListService.getIngredient(index);
      this.editMode = true;
      this.form.setValue({
        name: this.selectedIngredient.name,
        amount: this.selectedIngredient.amount
      });
    });
  }

  onSubmit(form: NgForm) {
    const name = form.value.name;
    const amount = form.value.amount;
    const ingredient = new Ingredient(name, amount);
    if(this.editMode) {
      this.shoppingListService.updateIngredient(this.selectedIngredientIndex, ingredient);
    } else {
      this.shoppingListService.addIngredient(ingredient);
    }
    this.onClear();
  }

  ngOnDestroy() {
    this.startedEditingSub.unsubscribe();
  }

  onClear() {
    this.editMode = false;
    this.form.reset();
  }

  onDelete() {
    this.shoppingListService.deleteIngredient(this.selectedIngredientIndex);
    this.onClear();
  }
}
