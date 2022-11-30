import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ShopComponent } from './shop.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

const routes: Routes = [
  {path: '', component: ShopComponent},     //we don't need path, because ShopComponent is root component for this module
  {path: ':id', component: ProductDetailsComponent, data: {breadcrumb: {alis: 'productDetails'}}},
]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forChild(routes)       //only be available in shop.module, not in app.module
  ],
  exports: [                              //exports need because we using this module inside shop.module
    RouterModule
  ]
})
export class ShopRoutingModule { }
