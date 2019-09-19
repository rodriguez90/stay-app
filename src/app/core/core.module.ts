/**
 * Created by yopt on 08/09/2019.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OverlayModule } from '@angular/cdk/overlay';

import { RentService } from './services/rentService';
import {Api} from "./services/api";
import {AuthService} from "./services/auth.service";


@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        OverlayModule
    ],
    exports: [],
    providers: [
        RentService, Api, AuthService

    ]
})
export class CoreModule { }
