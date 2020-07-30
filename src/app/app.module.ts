import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';

import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { SpinnerComponent } from './shared/component/spinner/spinner.component';
import { RequestConsentComponent } from './components/request-consent/request-consent.component';
import { LoanProcessorDashboardComponent } from './components/loan-processor-dashboard/loan-processor-dashboard.component';
import { LoanProcessingCustomerDetailsComponent } from './components/loan-processing-customer-details/loan-processing-customer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    RequestConsentComponent,
    LoanProcessorDashboardComponent,
    LoanProcessingCustomerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
