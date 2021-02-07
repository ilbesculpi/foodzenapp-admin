import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RecipesHomeComponent } from './home/recipes-home.component';


const routes: Routes = [
    {
        path: '',
        component: RecipesHomeComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecipesRoutingModule {
}
