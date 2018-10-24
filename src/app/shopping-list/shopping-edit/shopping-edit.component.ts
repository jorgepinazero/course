import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild ('nameInput') nInput: ElementRef;
  @ViewChild ('amountInput') aInput: ElementRef;
  @Output () ingredientAdded = new EventEmitter <Ingredient> ();
  constructor() { }

  ngOnInit() {
  }

  addIngredient() {
      const ingName = this.nInput.nativeElement.value;
      const ingAmount = this.aInput.nativeElement.value;
      const newIngredient = new Ingredient(ingName, ingAmount);
      this.ingredientAdded.emit(newIngredient);
  }

}
