import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {HomeComponent} from './views/home/home.component';
import {WarningAlertComponent} from "./components/warning-alert/warningAlert.component";
import {SuccessAlertComponent} from './components/success-alert/success-alert.component';
import {FormBuilder, FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HighlightDirective} from '../directives/highlight.directive';
import {IndexNavbarComponent} from "./components/navbar/index-navbar/index-navbar.component";
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {RegisterComponent} from './views/auth/register/register.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FooterSmallComponent} from "./components/footer/footer-small/footer-small.component";
import {LoginComponent} from "./views/auth/login/login.component";
import {AuthComponent} from "./layout/auth/auth.component";
import {MatSelectModule} from "@angular/material/select";
import {MatRadioModule} from "@angular/material/radio";
import {MatDatepickerModule} from "@angular/material/datepicker";
import {MatNativeDateModule} from "@angular/material/core";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {JobOfferComponent} from "./views/jobOffers/jobOffer.component";
import {SearchComponent} from "./components/search/search.component";
import {JobOfferCardComponent} from "./components/card/job-offer-card.component";
import {CompanyComponent} from "./layout/Company/company.component";
import {SidebarComponent} from "./components/sidebar/sidebar.component";
import {JobOfferCompanyComponent} from "./views/company/job-offer/job-offer.component";
import {JobOfferFormComponent} from "./components/forms/job-offer-form.component";
import {AdminComponent} from "./layout/admin/admin.component";
import {AdminSidebarComponent} from "./components/sidebar/admin-sidebar.component";
import {AdminLoginComponent} from "./views/auth/login/admin-login.component";
import {CardSocialTrafficComponent} from "./components/card/card-social-traffic/card-social-traffic.component";
import {CardPageVisitsComponent} from "./components/card/card-page-visits/card-page-visits.component";
import {CardTableComponent} from "./components/card/card-table/card-table.component";
import {TableDropdownComponent} from "./components/dropdowns/table-dropdown/table-dropdown.component";
import {AdminJobOfferComponent} from "./views/admin/job-offers/job-offer.component";
import { CardPostulationFormComponent } from './components/card/card-postulation-form/card-postulation-form.component';
import {PaymentComponent} from "./views/company/payment/payment.component";
import { CancelComponent } from './components/payment/cancel/cancel.component';
import { SucessComponent } from './components/payment/sucess/sucess.component';
import { CheckoutComponent } from './components/payment/checkout/checkout.component';
import { SubscriptionComponent } from './views/company/subscription/subscription.component';
import {AuthInterceptorInterceptor} from "./interceptor/auth-interceptor.interceptor";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardTableComponent,
    TableDropdownComponent,
    AdminJobOfferComponent,
    CardSocialTrafficComponent,
    CardPageVisitsComponent,
    AuthComponent,
    FooterSmallComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    IndexNavbarComponent,
    HighlightDirective,
    RegisterComponent,
    LoginComponent,
    JobOfferComponent,
    SearchComponent,
    JobOfferCardComponent,
    CompanyComponent,
    SidebarComponent,
    JobOfferCompanyComponent,
    JobOfferFormComponent,
    AdminComponent,
    AdminSidebarComponent,
    AdminLoginComponent,
    CardPostulationFormComponent,
    PaymentComponent,
    CancelComponent,
    SucessComponent,
    CheckoutComponent,
    SubscriptionComponent

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatRadioModule,
    MatCardModule,
    MatButtonModule,
    MatDatepickerModule,
    MatNativeDateModule
  ],
  providers: [
    FormBuilder,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorInterceptor, multi: true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
