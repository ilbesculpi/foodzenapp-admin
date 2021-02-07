import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Recipe } from 'src/app/models';
import { RecipesService } from 'src/app/services';

@Component({
    selector: 'app-recipes-home',
    templateUrl: './recipes-home.component.html',
    styleUrls: ['./recipes-home.component.scss']
})
export class RecipesHomeComponent implements OnInit {

    loading: boolean = false;
    $recipes: Observable<Recipe[]>;

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
        this.fetchRecipes();
    }

    private fetchRecipes() {
        this.loading = true;
        this.$recipes = this.recipesService.fetchAllRecipes()
            .pipe(
                tap(() => this.loading = false)
            );
    }

}
