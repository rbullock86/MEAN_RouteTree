import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { BrandComponent } from './brand/brand.component';
import { CategoryComponent } from './category/category.component';

const routes: Routes = [
  { path: 'products', component: ProductComponent, children: [
    { path: 'details/:id', component: ProductdetailComponent },
    { path: 'brand/:brand', component: BrandComponent},
    { path: 'category/:cat', component: CategoryComponent}
  ] },
  { path: 'reviews', component: ReviewComponent, children: [

  ] },
  { path: '', pathMatch: 'full', redirectTo: '/'},
  { path: '**', redirectTo: '/' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
