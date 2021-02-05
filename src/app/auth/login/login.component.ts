import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services';

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: FormGroup = new FormGroup({
        email: new FormControl('admin@localhost.com', [Validators.required, Validators.email]),
        password: new FormControl('123456', [Validators.required, Validators.minLength(4)])
    });

    constructor(private authService: AuthService) {
    }

    ngOnInit() {
    }

    async submit() {
        console.log('form', this.form.value);
        const { email, password } = this.form.value;
        const response = await this.authService.login(email, password);
        console.log('response', response);
    }

}
