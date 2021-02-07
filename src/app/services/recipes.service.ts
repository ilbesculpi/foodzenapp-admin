import { Injectable } from '@angular/core';
import { from, Observable } from 'rxjs';
import { Recipe } from '../models';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class RecipesService {

    constructor(private api: ApiService) {
    }

    fetchAllRecipes() : Observable<Recipe[]> {
        return from(this.api.get<Recipe[]>('recipes'));
    }

}