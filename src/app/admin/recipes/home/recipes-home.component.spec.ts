import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { from, of } from 'rxjs';
import { RecipesService } from 'src/app/services';

import { RecipesHomeComponent } from './recipes-home.component';

describe('RecipesHomeComponent', () => {

    let component: RecipesHomeComponent;
    let fixture: ComponentFixture<RecipesHomeComponent>;
    let recipesServiceSpy: any;

    beforeEach(async(() => {

        recipesServiceSpy = jasmine.createSpyObj('RecipesService', ['fetchAllRecipes']);
        recipesServiceSpy.fetchAllRecipes.and.returnValue(of([]));

        TestBed.configureTestingModule({
            declarations: [RecipesHomeComponent],
            providers: [
                { provide: RecipesService, useValue: recipesServiceSpy }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(RecipesHomeComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
