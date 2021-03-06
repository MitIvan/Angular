import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';
import { Recipe } from './recipe.model';

@Injectable()
export class RecipeService {
    recipesChanged = new Subject<Recipe[]>();

    private recipes: Recipe[] = [
        new Recipe('Test Recipe 1',
        'recipe 1',
         'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg',
        [
            new Ingredient('Meat', 2),
            new Ingredient('Bread', 2),
        ]),
        new Recipe('Test Recipe 2',
        'recipe 2', 
        'https://realfood.tesco.com/media/images/RFO-1400x919-AsianSalmon-9a9cf566-eaad-4107-aa79-886ec53e6b31-0-1400x919.jpg',
        [
            new Ingredient ('Pasta', 2),
            new Ingredient ('Cheese', 2),
        ])
    ];
    
    constructor(private slService: ShoppingListService) {}
    
    getRecipes() {
        return [...this.recipes];    
    }

    getRecipe(index: number) {
        return this.recipes[index]
        

    }

    addIngredientToShoppingList(ingredients: Ingredient[]) {
        this.slService.addIngredients(ingredients)
    }

    addRecipe(recipe: Recipe) {
        this.recipes.push(recipe)
        this.recipesChanged.next([...this.recipes])
    }

    updateRecipe(index: number, newRecipe: Recipe) {
        this.recipes[index] = newRecipe;
        this.recipesChanged.next([...this.recipes])
    }

    deleteRecipe(index: number) {
        this.recipes.splice(index, 1)
        this.recipesChanged.next([...this.recipes])
    }
}