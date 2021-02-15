import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateRecipeComponent } from './create/create-recipe.component';
import { RecipesHomeComponent } from './home/recipes-home.component';
import { ViewRecipeComponent } from './view/view-recipe.component';


const routes: Routes = [
    {
        path: '',
        component: RecipesHomeComponent,
        pathMatch: 'full'
    },
    {
        path: 'create',
        component: CreateRecipeComponent
    },
    {
        path: ':id',
        children: [
            {
                path: 'view',
                component: ViewRecipeComponent
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
}
