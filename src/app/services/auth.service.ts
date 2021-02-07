import { Inject, Injectable } from '@angular/core';
import { APP_LOCAL_STORAGE, APP_SESSION_STORAGE } from '../tokens';
import { ApiService } from './api.service';

const USER_KEY = 'app.user';
const ACCESS_TOKEN_KEY = 'app.accessToken';

interface LoginResponse {
    access_token: string;
    user: any;
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    redirectUrl: string = '/admin/dashboard';
    private user?: any = null;
    private token?: any = null;

    constructor(private api: ApiService, @Inject(APP_LOCAL_STORAGE) private storage: Storage) {
    }

    get isLoggedIn() : boolean {
        const token = this.storage.getItem(ACCESS_TOKEN_KEY);
        return token ? true : false;
    }

    get loggedUser() : any {
        if( this.user ) {
            return this.user;
        }
        // decode user from storage
        const s = this.storage.getItem(USER_KEY);
        if( !s ) {
            return null;
        }
        this.user = JSON.parse(s);
        return this.user;
    }

    set loggedUser(user: any) {
        this.user = user;
        this.storage.setItem(USER_KEY, JSON.stringify(user));
    }

    get accessToken() : string {
        if( this.token ) {
            return this.token;
        }
        // decode token from storage
        this.token = this.storage.getItem(ACCESS_TOKEN_KEY);
        return this.token;
    }

    set accessToken(token: string) {
        this.token = token;
        this.storage.setItem(ACCESS_TOKEN_KEY, token);
    }

    async login(email, password) : Promise<any> {
        try {
            const response = await this.api.post<LoginResponse>('auth/login', { email, password });
            // If sucess response, log user
            this.loggedUser = response.user;
            // store accessToken
            this.accessToken = response.access_token;
            return response.user;
        }
        catch(error) {
            throw error;
        }
    }

    logout() {
        this.storage.removeItem(USER_KEY);
        this.storage.removeItem(ACCESS_TOKEN_KEY);
        this.user = null;
    }

}
