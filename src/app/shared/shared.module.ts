import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';



import { MenuItems } from './menu-items/menu-items';
import {
  AccordionAnchorDirective,
  AccordionLinkDirective,
  AccordionDirective
} from './accordion';

import {MaterialModule} from '../material.module';
import {CustomFormsModule} from 'ng2-validation';
//page



@NgModule({
  declarations: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective
  ],

  exports: [
    AccordionAnchorDirective,
    AccordionLinkDirective,
    AccordionDirective,
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
  ],
  imports: [
    MaterialModule,
    FlexLayoutModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
  ],
  providers: [MenuItems],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule {}
