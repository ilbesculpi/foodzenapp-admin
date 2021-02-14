import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipesService, CreateRecipeRequest, LayoutService } from 'src/app/services';

declare const $: any;

@Component({
    selector: 'app-create-recipe',
    templateUrl: './create-recipe.component.html',
    styleUrls: ['./create-recipe.component.scss']
})
export class CreateRecipeComponent implements OnInit {

    loading: boolean = false;

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.maxLength(600)])
    });

    constructor(private recipesService: RecipesService, private layoutService: LayoutService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.initRTEEditor();
        }, 300);
    }

    initRTEEditor() {
        $('#editor').summernote({
            placeholder: 'Enter a short description for the recipe',
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['paragraph']],
                ['insert', ['link']]
            ]
        });
    }

    get editorContent() : string {
        return $('#editor').summernote('code');
    }

    async submit() {
        // console.log('submit', this.form.value);
        const request = this.form.value as CreateRecipeRequest;
        this.loading = true;
        this.recipesService.createRecipe(request)
            .subscribe(result => {
                this.loading = false;
                this.layoutService.redirectTo('/admin/recipes');
            });
    }

}
