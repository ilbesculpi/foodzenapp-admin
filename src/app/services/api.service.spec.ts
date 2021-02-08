import { HttpClient } from '@angular/common/http';
import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';

import { ApiService } from './api.service';

describe('ApiService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    const asyncData = (json: any) : Observable<any> => {
        return of(json);
    };

    describe('GET', () => {

        it('should perform GET requests without parameters', async () => {

            const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
            httpSpy.get.and.returnValue(asyncData({}));
            const service: ApiService = new ApiService(httpSpy as any);

            const data = await service.get<any>('plain');
            expect(httpSpy.get).toHaveBeenCalledTimes(1);
            expect(httpSpy.get).toHaveBeenCalledWith('http://localhost:8000/plain');
        });

        it('should perform GET requests with query parameters', async () => {

            // Setup spies
            const httpSpy = jasmine.createSpyObj('HttpClient', ['get']);
            httpSpy.get.and.returnValue(asyncData({}));

            // Instantiate the service
            const service: ApiService = new ApiService(httpSpy as any);

            // Call service.get()
            const data = await service.get<any>('plain', { a: 'foo', b: 'bar' });

            // Expectations
            expect(httpSpy.get).toHaveBeenCalledTimes(1);
            expect(httpSpy.get).toHaveBeenCalledWith('http://localhost:8000/plain?a=foo&b=bar');
        });

    });

    describe('POST', () => {

        it('should perform POST requests', async () => {

            // Setup spies
            const httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
            httpSpy.post.and.returnValue(asyncData({}));

            // Instantiate the service
            const service: ApiService = new ApiService(httpSpy as any);

            // Call service.post() with some data
            const data = await service.post<any>('data', { weapon: 'sword' });

            // Expectations
            expect(httpSpy.post).toHaveBeenCalledTimes(1);
            expect(httpSpy.post).toHaveBeenCalledWith('http://localhost:8000/data', { weapon: 'sword' });

        });

    });

});
