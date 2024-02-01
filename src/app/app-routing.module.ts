import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AllproductsComponent } from './allproducts/allproducts.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { CartComponent } from './cart/cart.component';
import { ViewProductsComponent } from './view-products/view-products.component';
import { CheckoutComponent } from './checkout/checkout.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const routes: Routes = [
{path:"",component:AllproductsComponent},
{path:"user/register",component:RegisterComponent},
{path:"wishlist",component:WishlistComponent},
{path:"cart",component:CartComponent},
{path:"user/login",component:LoginComponent},
{path:"view-product/:id",component:ViewProductsComponent},
{path:"checkout",component:CheckoutComponent},
{path:"**",component:PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
