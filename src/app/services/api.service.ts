import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators'

const API_BASE_URL = environment.api.endpoint;

const endPoint = (path: string) : string => {
    if( path.startsWith('/') ) {
        return API_BASE_URL + path;
    }
    return API_BASE_URL + '/' + path;
};

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get<T>(path: string, params?: any) : Promise<T> {
        const url = endPoint(path);
        let queryParams: HttpParams = null;
        if( params ) {
            queryParams = new HttpParams();
            Object.keys(params).forEach((key) => {
                queryParams.set(key, params[key]);
            });
        }
        return this.http.get<T>(url, {
            params: queryParams
        }).toPromise();
    }

    post<T>(path: string, params?: any) : Promise<T> {
        const url = endPoint(path);
        return this.http.post<T>(url, params).toPromise();
    }

}
