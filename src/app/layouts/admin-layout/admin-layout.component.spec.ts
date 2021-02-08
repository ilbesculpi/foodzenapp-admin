import { Component } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { AdminLayoutComponent } from './admin-layout.component';

@Component({
    selector: 'app-admin-header',
    template: ''
})
class HeaderStub {
}

@Component({
    selector: 'app-admin-sidebar',
    template: ''
})
class SidebarStub {
}

@Component({
    selector: 'router-outlet',
    template: ''
})
class RouterOutletStub {
}

describe('AdminLayoutComponent', () => {

    let component: AdminLayoutComponent;
    let fixture: ComponentFixture<AdminLayoutComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [
                HeaderStub,
                SidebarStub,
                RouterOutletStub,
                AdminLayoutComponent
            ]
        }).compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(AdminLayoutComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});
