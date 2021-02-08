import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { defer, from, Observable, of } from 'rxjs';
import { RecipesService } from 'src/app/services';
import { fixtures } from 'src/testing';

import { RecipesHomeComponent } from './recipes-home.component';

describe('RecipesHomeComponent', () => {

    let component: RecipesHomeComponent;
    let fixture: ComponentFixture<RecipesHomeComponent>;
    let recipesService;
    let fetchRecipesSpy;

    const asyncData = <T>(data: T) : Observable<T> => {
        return defer(() => of(data));
    };

    beforeEach(() => {

        recipesService = jasmine.createSpyObj('RecipesService', ['fetchAllRecipes']);
        fetchRecipesSpy = recipesService.fetchAllRecipes.and.returnValue(of(fixtures.recipes));

        TestBed.configureTestingModule({
            declarations: [RecipesHomeComponent],
            providers: [
                { provide: RecipesService, useValue: recipesService }
            ]
        });

        fixture = TestBed.createComponent(RecipesHomeComponent);
        component = fixture.componentInstance;
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('ngOnInit()', () => {

        it('should fetch all recipes', async () => {

            fixture.detectChanges();

            expect(recipesService.fetchAllRecipes).toHaveBeenCalled();

        });

    });

    describe('Page Content', () => {

        it('should display section title', () => {

            // Trigger component initialization
            fixture.detectChanges();

            // Expect h1 tag to contain the title
            const page: HTMLElement = fixture.nativeElement;
            const titleEl = page.querySelector('h1');
            expect(titleEl.textContent).toBe('Recipes Page');
        });

        it('should display a list of recipes', () => {
            pending('not test defined yet.');
        });

    });

});
