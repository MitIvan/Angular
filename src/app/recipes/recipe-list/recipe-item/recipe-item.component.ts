import { Component, Input, OnInit, } from '@angular/core';

import { Recipe } from '../../recipe.model'


@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class RecipeItemComponent implements OnInit {
  //[recipe]="recipeEl" za da go imame vo recipe-list.component
  @Input() recipe: Recipe;
  @Input() index: number


  ngOnInit(): void {
  }

  

}

