import { Component } from '@angular/core';
import { Recipe } from '../../models/recipe.model';
import { NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-recipe-card',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './recipe-card.component.html',
  styleUrl: './recipe-card.component.css',
})
export class RecipeCardComponent {
  recipes: Recipe[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    const url = 'http://localhost:8080/recipes';

    this.http.get<Recipe[]>(url).subscribe((data) => {
      console.log(data);
      this.recipes = data;
    });
  }
}
