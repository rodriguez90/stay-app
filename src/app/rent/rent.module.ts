/**
 * Created by yopt on 07/09/2019.
 */

import { NgModule } from '@angular/core';
import {OverlayModule} from '@angular/cdk/overlay';
import {CommonModule} from '@angular/common';
import { RentRoutingModule } from './rent-routing.module';
import {MaterialModule} from '../material.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import {RentComponent} from './rent.component';
import {AddRentComponent} from './add-rent/add-rent.component';
import {DetailRentComponent} from './detail-rent/detail-rent.component';
import {ListRentComponent} from './list-rent/list-rent.component';


@NgModule({
    imports: [
        OverlayModule,
        CommonModule,
        RentRoutingModule,
        MaterialModule,
        FlexLayoutModule,
        FormsModule,
        ReactiveFormsModule
    ],

    declarations: [
        RentComponent,
        AddRentComponent,
        DetailRentComponent,
        ListRentComponent,
    ],
    exports: [
        ListRentComponent
    ],
})

export class RentModule { }
