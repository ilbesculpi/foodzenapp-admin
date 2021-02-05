import { HttpClient } from '@angular/common/http';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { SharedModule } from 'src/app/shared/shared.module';

import { LoginComponent } from './login.component';

describe('LoginComponent', () => {

    let component: LoginComponent;
    let fixture: ComponentFixture<LoginComponent>;
    let httpSpy;

    beforeEach(async(() => {
        httpSpy = jasmine.createSpyObj('HttpClient', ['post']);
        TestBed.configureTestingModule({
            declarations: [LoginComponent],
            imports: [SharedModule],
            providers: [
                { provide: HttpClient, useValue: httpSpy }
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(LoginComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
