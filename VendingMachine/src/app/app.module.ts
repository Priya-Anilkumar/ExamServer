import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './ui/login/login.component';
import { SignupComponent } from './ui/signup/signup.component';
import { HeaderComponent } from './ui/header/header.component';
import { ChooseDrinkComponent } from './ui/choose-drink/choose-drink.component';
import { ContainerStatusComponent } from './ui/container-status/container-status.component';
import { RefillingDetailComponent } from './ui/refilling-detail/refilling-detail.component';
import { RefillingFormComponent } from './ui/refilling-form/refilling-form.component';
import { ReportOptionComponent } from './ui/report-option/report-option.component';
import { SaleListDetailComponent } from './ui/sale-list-detail/sale-list-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    HeaderComponent,
    ChooseDrinkComponent,
    ContainerStatusComponent,
    RefillingDetailComponent,
    RefillingFormComponent,
    ReportOptionComponent,
    SaleListDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
