import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { ServerErrorComponent } from './core/server-error/server-error.component';
import { TestErrorComponent } from './core/test-error/test-error.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent, data: {breadcrumb: 'Home'}},
  {path: 'test-error', component: TestErrorComponent, data: {breadcrumb: 'Test Error'}},
  {path: 'server-error', component: ServerErrorComponent, data: {breadcrumb: 'Server Error'}},
  {path: 'not-found', component: NotFoundComponent, data: {breadcrumb: 'Not Found'}},
  {path: 'shop', loadChildren: () => import('./shop/shop.module').then(mod => mod.ShopModule),
    data: {breadcrumb: 'Shop'}},                                                                   //shop.module will be activated and loaded when we access shop path
  {path: 'basket', loadChildren: () => import('./basket/basket.module').then(mod => mod.BasketModule),
    data: {basket: 'Shop'}},
  {path: 'checkout', loadChildren: () => import('./checkout/checkout.module').then(mod => mod.CheckoutModule),
    data: {breadcrumb: 'Checkout'}},  
  {
    path: 'account',
    canActivate: [AuthGuard],
    loadChildren: () => import('./account/account.module')
      .then(mod => mod.AccountModule), data: {breadcrumb: {skip: true}}
  },  
  {path: '**', redirectTo: 'not-found', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
