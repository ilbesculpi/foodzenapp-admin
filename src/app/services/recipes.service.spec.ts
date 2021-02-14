import { TestBed } from '@angular/core/testing';
import { defer, Observable, of } from 'rxjs';
import { fixtures } from 'src/testing';

import { CreateRecipeRequest, RecipesService } from './recipes.service';

describe('RecipesService', () => {

    let apiServiceStub;
    let service: RecipesService;

    const asyncData = <T>(data: T) : Observable<T> => {
        return defer(() => of(data));
    };

    it('should be created', () => {
        apiServiceStub = jasmine.createSpyObj('ApiService', ['get', 'post']);
        service = new RecipesService(apiServiceStub);
        expect(service).toBeTruthy();
    });

    describe('fetchAllRecipes()', () => {

        let getSpy;

        beforeEach(() => {
            apiServiceStub = jasmine.createSpyObj('ApiService', ['get']);
            getSpy = apiServiceStub.get.and.returnValue(asyncData(fixtures.recipes));
            service = new RecipesService(apiServiceStub);
        });

        it('should call GET /recipes', () => {

            // Call service.fetchAllRecipes()
            service.fetchAllRecipes()
                .subscribe(result => {
                    // Expectations
                    expect(getSpy).toHaveBeenCalledWith('recipes');
                });
        });

        it('should return an Observable<Recipe[]>', () => {

            // Call service.fetchAllRecipes()
            service.fetchAllRecipes()
                .subscribe(recipes => {
                    // Expectations
                    expect(recipes.length).toBe( fixtures.recipes.length );
                });
        });

    });

    describe('create()', () => {

        let postSpy;

        beforeEach(() => {
            apiServiceStub = jasmine.createSpyObj('ApiService', ['post']);
            postSpy = apiServiceStub.post.and.returnValue(asyncData(fixtures.recipes[0]));
            service = new RecipesService(apiServiceStub);
        });

        it('should call POST /recipes with request data', () => {

            // Given a request
            const request: CreateRecipeRequest = {
                name: 'My new Recipe',
                description: 'Lorem ipsum dolor'
            };

            // Call service.createRecipe()
            service.createRecipe(request)
                .subscribe(result => {
                    // Expectations
                    expect(postSpy).toHaveBeenCalled();
                    expect(postSpy).toHaveBeenCalledWith('recipes', request);
                });
        });

        it('should return an Observable<Recipe>', () => {
            pending('test not implemented yet.');
        });

    });

});
