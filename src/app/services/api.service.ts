import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { take } from 'rxjs/operators'

@Injectable({
    providedIn: 'root'
})
export class ApiService {

    constructor(private http: HttpClient) {
    }

    get<T>(path: string, params?: any) : Promise<T> {
        const url = 'http://localhost:8000/' + path;
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
        const url = 'http://localhost:8000/' + path;
        return this.http.post<T>(url, params).toPromise();
    }

}
