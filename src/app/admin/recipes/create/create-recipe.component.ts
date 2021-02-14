import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesService } from 'src/app/services';
import { CreateRecipeRequest } from 'src/app/services/recipes.service';

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

    loading: boolean = false;

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.maxLength(150)])
    });

    constructor(private recipesService: RecipesService) {
    }

    ngOnInit() {
    }

    async submit() {
        console.log('submit', this.form.value);
        const request = this.form.value as CreateRecipeRequest;
        this.loading = true;
        this.recipesService.createRecipe(request)
            .subscribe(result => {
                this.loading = false;
            });
    }

}
