import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const apiSpy = jasmine.createSpyObj('ApiService', ['post']);
        const service: AuthService = new AuthService(apiSpy);
        expect(service).toBeTruthy();
    });

});
