/**
 * Created by yopt on 08/09/2019.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import {Api} from "./services/http/api";
import {AuthService, RentService} from './services';


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        OverlayModule
    ],
    exports: [],
    providers: [
      Api, RentService, AuthService

    ]
})
export class CoreModule { }
