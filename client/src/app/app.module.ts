import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { HomeModule } from './home/home.module';
import { ErrorInterceptor } from './core/interceptors/error.interceptor';
import { NgxSpinnerModule } from 'ngx-spinner';
import { LoadingInterceptors } from './core/interceptors/loading.interceptors';
import { JwtInterceptors } from './core/interceptors/jwt.interceptor';
import { OrderDetailedComponent } from './orders/order-detailed/order-detailed.component';

@NgModule({
    declarations: [
        AppComponent,
        OrderDetailedComponent
    ],
    providers: [
        {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptors, multi: true},
        {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptors, multi: true}
    ],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        HttpClientModule,
        CoreModule,
        HomeModule,
        NgxSpinnerModule
    ]
})
export class AppModule { }
