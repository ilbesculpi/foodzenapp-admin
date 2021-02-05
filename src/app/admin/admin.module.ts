import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutsModule } from '../layouts/layouts.module';
import { PagesModule } from './pages/pages.module';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        LayoutsModule,
        PagesModule,
        AdminRoutingModule
    ]
})
export class AdminModule {
}
