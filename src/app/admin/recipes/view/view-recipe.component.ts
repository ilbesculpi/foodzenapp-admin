import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Recipe } from 'src/app/models';
import { RecipesService } from 'src/app/services';

@Component({
    selector: 'app-view-recipe',
    templateUrl: './view-recipe.component.html',
    styleUrls: ['./view-recipe.component.scss']
})
export class ViewRecipeComponent implements OnInit {

    $recipe: Observable<Recipe>;

    constructor(private recipesService: RecipesService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.route.paramMap.subscribe(params => {
            const recipeId = params.get('id');
            console.log('recipeId', recipeId);
            this.$recipe = this.recipesService.getRecipe(recipeId);
        });
    }

}
