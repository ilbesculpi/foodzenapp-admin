import { Injectable } from '@angular/core';
import { ApiService } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    redirectUrl: string = '/admin/dashboard';
    private user?: any = null;

    constructor(private api: ApiService) {
    }

    get isLoggedIn() : boolean {
        return this.user != null;
    }

    get loggedUser() : any {
        return this.user;
    }

    async login(email, password) : Promise<any> {
        try {
            const user = await this.api.post<any>('auth/login', { email, password });
            // If sucess response, log user
            this.logUser(user);
            return user;
        }
        catch(error) {
            throw error;
        }
    }

    logUser(user: any) {
        this.user = user;
    }

}
