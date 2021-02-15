import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Recipe } from '../models';
import { ApiService } from './api.service';

export interface CreateRecipeRequest {
    name: string;
    description?: string;
}

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor(private api: ApiService) {
    }

    fetchAllRecipes() : Observable<Recipe[]> {
        return from(this.api.get<any[]>('recipes'))
            .pipe(
                map(items => {
                    return items.map(item => new Recipe(item));
                })
            )
    }

    createRecipe(request: CreateRecipeRequest) : Observable<Recipe> {
        return from(this.api.post<Recipe>('recipes', request));
    }

    getRecipe(id: string) : Observable<Recipe> {
        return from(this.api.get<any>(`recipes/${id}`))
            .pipe(
                map(item => new Recipe(item))
            );
    }

}
