import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { RequestConsentComponent } from './components/request-consent/request-consent.component';
import { LoanProcessorDashboardComponent } from './components/loan-processor-dashboard/loan-processor-dashboard.component';
import { LoanProcessingCustomerDetailsComponent } from './components/loan-processing-customer-details/loan-processing-customer-details.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'consent', component: RequestConsentComponent},
  { path: 'loan-dash1', component: LoanProcessorDashboardComponent},
  { path: 'customer-details', component: LoanProcessingCustomerDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
