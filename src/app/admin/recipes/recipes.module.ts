import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesHomeComponent } from './home/recipes-home.component';
import { CreateRecipeComponent } from './create/create-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
    declarations: [
        RecipesHomeComponent,
        CreateRecipeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {
}
