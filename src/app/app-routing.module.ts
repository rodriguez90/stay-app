import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {ProductsComponent} from './components/product/products/products.component';
import {SignupComponent} from './auth/signup/signup.component';
import {LoginComponent1} from './auth/login/login.component';
import {TrainingComponent} from './training/training.component';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {FullComponent} from './layouts/full/full.component';
import {AppBlankComponent} from './layouts/blank/blank.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';
import {DetailRentComponent} from './rent/detail-rent/detail-rent.component';
import {AddRentComponent} from "./rent/add-rent/add-rent.component";
import {ListRentComponent} from "./rent/list-rent/list-rent.component";
import {LoginComponent} from "./authentication/login/login.component";
import {AuthGuard} from "./guards/auth.guard";



const routes: Routes = [
  { path: '',
    component: FullComponent,
    children: [
      {
        path: '',
        redirectTo: '/welcome',
        pathMatch: 'full'
      },
      { path: 'welcome', component: WelcomeComponent},
      { path: 'aboutus', component: AboutUsComponent},
      { path: 'rents', component: ListRentComponent },
      { path: 'addrent', component: AddRentComponent, canActivate: [AuthGuard]},
      { path: 'addrent/:id', component: AddRentComponent },
      { path: 'contactus', component: ContactUsComponent },
      { path: 'detailrent/:id', component: DetailRentComponent }

    ] },
    {
    path: '',
    component: AppBlankComponent,
    children: [
      {
        path: 'authentication',
        loadChildren:
            './authentication/authentication.module#AuthenticationModule'
      }
    ]
  },
  {
    path: '**',
    redirectTo: 'authentication/404'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
