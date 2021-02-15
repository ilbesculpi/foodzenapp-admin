import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RecipesRoutingModule } from './recipes-routing.module';
import { RecipesHomeComponent } from './home/recipes-home.component';
import { CreateRecipeComponent } from './create/create-recipe.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { ViewRecipeComponent } from './view/view-recipe.component';


@NgModule({
    declarations: [
        RecipesHomeComponent,
        CreateRecipeComponent,
        ViewRecipeComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        RecipesRoutingModule
    ]
})
export class RecipesModule {
}
