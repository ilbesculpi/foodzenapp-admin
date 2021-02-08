import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

class MemoryStorage implements Storage {

    [name: string]: any;
    length: number;
    private hash: any;

    clear(): void {
        this.hash = {};
    }

    getItem(key: string): string {
        return this.hash[key];
    }

    key(index: number): string {
        throw new Error('Method not implemented.');
    }

    removeItem(key: string): void {
        delete(this.hash[key]);
    }

    setItem(key: string, value: string): void {
        this.hash[key] = value;
    }

}

describe('AuthService', () => {

    beforeEach(() => TestBed.configureTestingModule({}));

    it('should be created', () => {
        const apiSpy = jasmine.createSpyObj('ApiService', ['post']);
        const storage = new MemoryStorage();
        const service: AuthService = new AuthService(apiSpy, storage);
        expect(service).toBeTruthy();
    });

});
