import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { Page404Component } from './page404/page404.component';
import { RouterModule } from '@angular/router';


@NgModule({
    declarations: [
        DashboardComponent,
        Page404Component
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        DashboardComponent,
        Page404Component
    ]
})
export class AdminPagesModule {
}
