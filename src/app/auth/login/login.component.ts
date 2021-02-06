import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', [Validators.required, Validators.minLength(4)])
    });

    loginError: {
        type: string;
        cssClass: string;
        message: string;
    }

    constructor(private authService: AuthService, private router: Router) {
    }

    ngOnInit() {
    }

    async submit() {

        // console.log('form', this.form.value);

        // clear error message
        this.loginError = null;

        const { email, password } = this.form.value;
        try {
            const response = await this.authService.login(email, password);
            console.log('response', response);
            return this.router.navigateByUrl( this.authService.redirectUrl );
        }
        catch(error) {
            console.log(error);
            this.loginError = {
                type: 'danger',
                cssClass: 'alert alert-danger',
                message: error.error.message
            }
        }
    }

}
