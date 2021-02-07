import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthLayoutComponent } from './auth-layout/auth-layout.component';
import { RouterModule } from '@angular/router';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { AdminSidebarComponent } from './admin/sidebar/sidebar.component';
import { AdminHeaderComponent } from './admin/header/header.component';


@NgModule({
    declarations: [
        AuthLayoutComponent,
        AdminLayoutComponent,
        AdminSidebarComponent,
        AdminHeaderComponent
    ],
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        AuthLayoutComponent,
        AdminLayoutComponent,
        AdminSidebarComponent,
        AdminHeaderComponent
    ]
})
export class LayoutsModule {
}
