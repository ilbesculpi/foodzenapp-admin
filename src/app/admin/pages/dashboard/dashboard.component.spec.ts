import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardComponent } from './dashboard.component';

describe('Admin::DashboardComponent', () => {

    let component: DashboardComponent;
    let fixture: ComponentFixture<DashboardComponent>;

    beforeEach(() => {
        TestBed.configureTestingModule({
            declarations: [DashboardComponent]
        });
        fixture = TestBed.createComponent(DashboardComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

    describe('Page Content', () => {

        it('should display section title', () => {

            // Trigger component initialization
            fixture.detectChanges();

            // Expect h1 tag to contain the title
            const page: HTMLElement = fixture.nativeElement;
            const titleEl = page.querySelector('h1');
            expect(titleEl.textContent).toBe('Dashboard');
        });

    });

});
