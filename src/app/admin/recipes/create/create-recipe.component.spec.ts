import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipesService } from 'src/app/services';

import { CreateRecipeComponent } from './create-recipe.component';

describe('CreateRecipeComponent', () => {

    let component: CreateRecipeComponent;
    let fixture: ComponentFixture<CreateRecipeComponent>;
    let recipesService;

    beforeEach(() => {

        recipesService = jasmine.createSpyObj('RecipesService', ['createRecipe']);

        TestBed.configureTestingModule({
            declarations: [CreateRecipeComponent],
            providers: [
                { provide: RecipesService, useValue: recipesService }
            ]
        });
        fixture = TestBed.createComponent(CreateRecipeComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Page Content', () => {

        it('should display section title', () => {

            // Trigger component initialization
            fixture.detectChanges();

            // Expect h1 tag to contain the title
            const page: HTMLElement = fixture.nativeElement;
            const titleEl = page.querySelector('h1');
            expect(titleEl.textContent).toBe('Create Recipe');
        });

    });

});
