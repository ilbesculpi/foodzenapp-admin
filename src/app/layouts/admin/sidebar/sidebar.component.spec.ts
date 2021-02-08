import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { RouterLinkDirectiveStub } from 'src/testing';

import { AdminSidebarComponent } from './sidebar.component';


describe('AdminSidebarComponent', () => {

    let component: AdminSidebarComponent;
    let fixture: ComponentFixture<AdminSidebarComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [
                RouterLinkDirectiveStub,
                AdminSidebarComponent
            ]
        });
        fixture = TestBed.createComponent(AdminSidebarComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    it('should provide links to main sections', () => {

        // get all links in component html
        const linksEl = fixture.debugElement.queryAll(By.directive(RouterLinkDirectiveStub));
        const routerLinks: RouterLinkDirectiveStub[] = linksEl.map(el => el.injector.get(RouterLinkDirectiveStub));

        // Expect links to main sections
        expect(routerLinks[0].target).toBe('/admin/dashboard', 'link to dashboard in logo');
        expect(routerLinks[1].target).toBe('/admin/dashboard', 'link to dashboard in MAIN');
        expect(routerLinks[2].target).toBe('/admin/recipes', 'link to recipes in MAIN');
        expect(routerLinks[3].target).toBe('/admin/ingredients', 'link to ingredients in MAIN');
    });

});
