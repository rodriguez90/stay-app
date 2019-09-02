import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProductsService} from './components/product/service/product.service';
import {HomeComponent} from './home.component';

import { ProductComponent } from './components/product/form/product-form.component';
import { ProductsComponent } from './components/product/products/products.component';
import { ProductViewComponent } from './components/product/product-view/product-view.component';

import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material.module';
import { SignupComponent } from './auth/signup/signup.component';

import { TrainingComponent } from './training/training.component';
import { CurrentTrainingComponent } from './training/current-training/current-training.component';
import { NewTrainingComponent } from './training/new-training/new-training.component';
import { PastTrainingComponent } from './training/past-training/past-training.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import {StopTrainingComponent} from './training/current-training/StopTraining.component';
import {AuthService1} from './auth/auth.service';


import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { RentComponent } from './rent/rent.component';
import { DetailRentComponent } from './rent/detail-rent/detail-rent.component';
import { AddRentComponent } from './rent/add-rent/add-rent.component';
import { ListRentComponent } from './rent/list-rent/list-rent.component';
import {RentService} from './rent/service/RentService';



import {SidenavComponent1} from './navigation/sidenav/sidenav.component';
import {HeaderComponent1} from './navigation/header/header.component';
import {LoginComponent1} from './auth/login/login.component';

import {AuthService} from './authentication/service/auth.service';


@NgModule({
  declarations: [
    AppComponent,
    ProductComponent,
      HomeComponent,
      ProductsComponent,
      ProductViewComponent,
      SignupComponent,

      TrainingComponent,
      CurrentTrainingComponent,
      NewTrainingComponent,
      PastTrainingComponent,

      WelcomeComponent,
      StopTrainingComponent,
      SpinnerComponent,
      FullComponent,
      AppBlankComponent,
      AppHeaderComponent,
      AppSidebarComponent,



    SidenavComponent1,
    HeaderComponent1,
    LoginComponent1,


      ContactUsComponent,
      AboutUsComponent,
      RentComponent,
      DetailRentComponent,
      AddRentComponent,
      ListRentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
      FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialModule,
      FlexLayoutModule,
    SharedModule
  ],
  providers: [ProductsService, AuthService1, RentService, AuthService],
  bootstrap: [AppComponent],
  entryComponents: [StopTrainingComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
