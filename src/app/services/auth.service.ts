import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private api: ApiService) {
    }

    login(email, password) {
        return this.api.post<any>('auth/login', { email, password });
    }

}
