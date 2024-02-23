import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./views/home/home.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {RegisterComponent} from "./views/auth/register/register.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {JobOfferComponent} from "./views/jobOffers/jobOffer.component";
import {CompanyComponent} from "./layout/Company/company.component";
import {JobOfferCompanyComponent} from "./views/company/job-offer/job-offer.component";
import {AdminComponent} from "./layout/admin/admin.component";
import {AdminLoginComponent} from "./views/auth/login/admin-login.component";
import {AdminJobOfferComponent} from "./views/admin/job-offers/job-offer.component";
import {PaymentComponent} from "./views/company/payment/payment.component";
import {CheckoutComponent} from "./components/payment/checkout/checkout.component";
import {CancelComponent} from "./components/payment/cancel/cancel.component";
import {SucessComponent} from "./components/payment/sucess/sucess.component";
import {SubscriptionComponent} from "./views/company/subscription/subscription.component";
import {GuardGuard} from "./guard/guard.guard";

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  {
    path: 'checkout',
    component: CheckoutComponent,
  },
  { path: 'cancel', component: CancelComponent },
  { path: 'success', component: SucessComponent },
  { path: 'auth', component: AuthComponent,
    children: [
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
      { path: 'admin', component: AdminLoginComponent },
  ]},
  { path: 'company' , component: CompanyComponent, children: [
      { path: 'job-offer', component: JobOfferCompanyComponent },
      { path: 'payment', component: PaymentComponent },
      { path: 'subscription', component: SubscriptionComponent },


    ],
    canActivate: [ GuardGuard ]
  },
  { path: 'admin', component: AdminComponent, children: [
      { path: 'job-offer', component: AdminJobOfferComponent }
      ]},
  { path: 'job-offers',component: JobOfferComponent},
  { path: '', redirectTo: 'home', pathMatch: 'full' },

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
