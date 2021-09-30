// angular imports
import {HttpClient} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { APP_INITIALIZER , NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

// app imports
import {MaterialModule} from './material.module';
import { CoreModule } from './core/core.module';
import {RentModule} from './rent/rent.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { SpinnerComponent } from './shared/spinner.component';
import { FullComponent } from './layouts/full/full.component';
import { AppBlankComponent } from './layouts/blank/blank.component';
import { AppHeaderComponent } from './layouts/full/header/header.component';
import { AppSidebarComponent } from './layouts/full/sidebar/sidebar.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { ContactUsComponent } from './pages/contact-us/contact-us.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import {FbsCoreModule} from '../../projects/fbs-core/src/lib/fbs-core.module';
import {AppConfigService, configurationServiceInitializerFactory} from './config';
import {MatCarouselModule} from '@ngmodule/material-carousel';


@NgModule({
  declarations: [
      AppComponent,
      SpinnerComponent,
      FullComponent,
      AppBlankComponent,
      AppHeaderComponent,
      AppSidebarComponent,
      WelcomeComponent,
      ContactUsComponent,
      AboutUsComponent,
  ],
  imports: [
      BrowserAnimationsModule,

      MaterialModule,
      MatCarouselModule,
      FlexLayoutModule,
      FbsCoreModule,
      SharedModule,
      CoreModule,
      RentModule,
      AppRoutingModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule


  ],
  providers: [

      {
          provide: APP_INITIALIZER,
          useFactory: configurationServiceInitializerFactory,
          deps: [AppConfigService, HttpClient],
          multi: true
      },
       ],
  bootstrap: [AppComponent],
  entryComponents: [],
})
export class AppModule { }
