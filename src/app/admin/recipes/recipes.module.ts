import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesHomeComponent } from './home/recipes-home.component';


@NgModule({
    declarations: [RecipesHomeComponent],
    imports: [
        CommonModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {
}
