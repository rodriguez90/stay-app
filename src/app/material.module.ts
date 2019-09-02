/**
 * Created by yopt on 10/11/2018.
 */
import {NgModule} from '@angular/core';
import {
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCheckboxModule,
    MatSidenavModule,
    MatToolbarModule,
    MatListModule,
    MatTabsModule,
    MatCardModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatMenuModule,
    MatProgressBarModule,
    MatSnackBarModule,
} from '@angular/material';

import { MatCarouselModule } from '@ngmodule/material-carousel';



@NgModule({
    imports: [
                MatButtonModule,
                MatInputModule,
                MatIconModule,
                MatFormFieldModule,
                MatDatepickerModule,
                MatNativeDateModule,
                MatCheckboxModule,
                MatSidenavModule,
                MatToolbarModule,
                MatListModule,
                MatTabsModule,
                MatCardModule,
                MatSelectModule,
                MatProgressSpinnerModule,
                MatDialogModule,
                MatCarouselModule,
                MatMenuModule,
                MatProgressBarModule,
                MatSnackBarModule

    ]
        ,
    exports: [
            MatButtonModule,
            MatInputModule,
            MatIconModule,
            MatFormFieldModule,
            MatDatepickerModule,
            MatNativeDateModule,
            MatCheckboxModule,
            MatSidenavModule,
            MatToolbarModule,
            MatListModule,
            MatTabsModule,
            MatCardModule,
            MatSelectModule,
            MatProgressSpinnerModule,
            MatDialogModule,
            MatCarouselModule,
            MatMenuModule,
            MatProgressBarModule,
            MatSnackBarModule

    ]
})
export class MaterialModule {

}
