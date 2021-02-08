import { TestBed, async, inject } from '@angular/core/testing';

import { AuthGuard } from './auth.guard';

describe('AuthGuard', () => {

    let authSpy;
    let routerSpy;

    beforeEach(() => {
        authSpy = jasmine.createSpyObj('AuthService', ['login']);
    });

    it('should ...', () => {
        const guard = new AuthGuard(authSpy, routerSpy);
        expect(guard).toBeTruthy();
    });

});
