import {Component, OnInit, Output, ViewChild, EventEmitter, ElementRef} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingListService} from "../shopping-list.service";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameInput', {static: false}) nameInputRef!: ElementRef;
  @ViewChild('amountInput', {static: false}) amountInputRef!: ElementRef;

  constructor(private shoppingListService: ShoppingListService) {
  }

  ngOnInit(): void {
  }

  onAddClick() {
    const name = this.nameInputRef.nativeElement.value;
    const amount = this.amountInputRef.nativeElement.value;
    this.shoppingListService.addIngredient(new Ingredient(name, amount));
  }
}
