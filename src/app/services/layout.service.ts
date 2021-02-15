import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})
export class LayoutService {

    constructor(private router: Router) {
    }

    redirectTo(path: string) : Promise<boolean> {
        return this.router.navigateByUrl(path);
    }

}
