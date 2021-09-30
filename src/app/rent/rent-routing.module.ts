/**
 * Created by yopt on 07/09/2019.
 */
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import {AddRentComponent} from './add-rent/add-rent.component';
import {DetailRentComponent} from './detail-rent/detail-rent.component';
import {ListRentComponent} from './list-rent/list-rent.component';
import {AuthGuard} from '../core/guards/auth.guard';
import {RentsComponent} from './rents/rents.component';

const routes: Routes = [
    { path: 'list', component: RentsComponent },
    { path: 'list/:ownerid', component: RentsComponent, canActivate: [AuthGuard] },
    { path: 'addrent', component: AddRentComponent, canActivate: [AuthGuard] },
    { path: 'addrent/:id', component: AddRentComponent, canActivate: [AuthGuard] },
    { path: 'detailrent/:id', component: DetailRentComponent, canActivate: [AuthGuard] },
    ];

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    exports: [RouterModule],
    declarations: []
})
export class RentRoutingModule { }

