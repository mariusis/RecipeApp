import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [NgFor,NgIf],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css'
})
export class RecipeCardComponent {
  recipes: Recipe[] = [];

  constructor() {
    
    this.recipes = [
      { name: 'Recipe 1', description: 'Description 1', ingredients: ['Ingredient 1','Tomato'], author: 'Author 1', favorite: true, likes: 10 },
      { name: 'Recipe 2', description: 'Description 2', ingredients: ['Ingredient 2',"Tomato"], author: 'Author 2', favorite: false, likes: 5 },
      { name: 'Recipe 1', description: 'Description 1', ingredients: ['Ingredient 1','Tomato'], author: 'Author 1', favorite: true, likes: 10 },
      { name: 'Recipe 2', description: 'Description 2', ingredients: ['Ingredient 2',"Tomato"], author: 'Author 2', favorite: false, likes: 5 },
      { name: 'Recipe 1', description: 'Description 1', ingredients: ['Ingredient 1','Tomato'], author: 'Author 1', favorite: true, likes: 10 },
      { name: 'Recipe 2', description: 'Description 2', ingredients: ['Ingredient 2',"Tomato"], author: 'Author 2', favorite: false, likes: 5 },
      { name: 'Recipe 1', description: 'Description 1', ingredients: ['Ingredient 1','Tomato'], author: 'Author 1', favorite: true, likes: 10 },
      { name: 'Recipe 2', description: 'Description 2', ingredients: ['Ingredient 2',"Tomato"], author: 'Author 2', favorite: false, likes: 5 },
      
      
    ];
  }
  
}
