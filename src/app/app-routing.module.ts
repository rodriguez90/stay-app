import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {WelcomeComponent} from './pages/welcome/welcome.component';
import {FullComponent} from './layouts/full/full.component';
import {AppBlankComponent} from './layouts/blank/blank.component';
import {ContactUsComponent} from './pages/contact-us/contact-us.component';
import {AboutUsComponent} from './pages/about-us/about-us.component';


//loadChildren: () =>  import('./shared/shared.module').then(m => m.WelcomeComponent)


const routes: Routes = [
  { path: '',
    component: FullComponent,
    children: [
      {path: '', redirectTo: '/welcome', pathMatch: 'full'},
      { path: 'welcome', component: WelcomeComponent},
      { path: 'aboutus', component: AboutUsComponent},
      { path: 'contactus', component: ContactUsComponent },
      { path: 'rent', loadChildren: './rent/rent.module#RentModule' },
    ]},
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
