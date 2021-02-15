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
    step: number = 1;

    form: FormGroup = new FormGroup({
        name: new FormControl('', [Validators.required]),
        description: new FormControl('', [Validators.maxLength(600)]),
        ingredients: new FormControl(''),
        preparation: new FormControl('')
    });

    constructor(private recipesService: RecipesService, private layoutService: LayoutService) {
    }

    ngOnInit() {
        setTimeout(() => {
            this.initializeTextEditors();
        }, 300);
    }

    initializeTextEditors() {

        $('#editor-description').summernote({
            placeholder: 'Enter a short description for the recipe',
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['paragraph']],
                ['insert', ['link']]
            ]
        });

        $('#editor-ingredients').summernote({
            placeholder: 'Explain which ingredients should be used (specify quantities)',
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['paragraph']],
                ['insert', ['link']]
            ]
        });

        $('#editor-preparation').summernote({
            placeholder: 'Explain how to proceed to prepare the recipe',
            toolbar: [
                ['style', ['style']],
                ['font', ['bold', 'underline', 'clear']],
                ['para', ['paragraph']],
                ['insert', ['link']]
            ]
        });
    }

    editorContent(field: string) : string {
        switch( field ) {
            case 'description':
                return $('#editor-description').summernote('code');
            case 'ingredients':
                return $('#editor-ingredients').summernote('code');
            case 'preparation':
                return $('#editor-preparation').summernote('code');
        }
        return '';
    }

    next() {
        this.step += 1;
    }

    prev() {
        this.step -= 1;
    }

    async submit() {

        // update editor value
        this.form.get('description').patchValue(this.editorContent('description'));
        this.form.get('ingredients').patchValue(this.editorContent('ingredients'));
        this.form.get('preparation').patchValue(this.editorContent('preparation'));


        console.log('submit', this.form.value);
        return;

        const request = this.form.value as CreateRecipeRequest;
        this.loading = true;
        this.recipesService.createRecipe(request)
            .subscribe(result => {
                this.loading = false;
                this.layoutService.redirectTo('/admin/recipes');
            });
    }

}
