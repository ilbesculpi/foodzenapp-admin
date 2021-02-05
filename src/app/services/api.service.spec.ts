import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    describe('GET', () => {

        const asyncData = (json: any) : Observable<any> => {
            return of(json);
        };

        it('should perform GET requests without parameters', async () => {
            const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
            const service: ApiService = new ApiService(httpSpy as any);
            httpSpy.get.and.returnValue(asyncData({}))

            const data = await service.get<any>('plain');
            expect(httpSpy.get.calls.count()).toBe(1);
            expect(httpSpy.get.calls.argsFor(0)).toEqual(['http://localhost:8000/plain']);
        });

        it('should perform GET requests with query parameters', async () => {
            const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
            const service: ApiService = new ApiService(httpSpy as any);
            httpSpy.get.and.returnValue(asyncData({}))

            const data = await service.get<any>('plain', { a: 'foo', b: 'bar' });
            expect(httpSpy.get.calls.count()).toBe(1);
            expect(httpSpy.get.calls.argsFor(0)).toEqual(['http://localhost:8000/plain', { a: 'foo' }]);
        })
    })

});
