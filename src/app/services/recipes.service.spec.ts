import { TestBed } from '@angular/core/testing';

import { RecipesService } from './recipes.service';

describe('RecipesService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const apiSpy = jasmine.createSpyObj('ApiService', ['post']);
        const service: RecipesService = new RecipesService(apiSpy);
        expect(service).toBeTruthy();
    });

});
