import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PagesModule } from './pages/pages.module';
import { APP_LOCAL_STORAGE, APP_SESSION_STORAGE } from './tokens';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        PagesModule,
        AppRoutingModule
    ],
    providers: [
        {
            provide: APP_SESSION_STORAGE,
            useValue: window.sessionStorage
        },
        {
            provide: APP_LOCAL_STORAGE,
            useValue: window.localStorage
        }
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule {
}
