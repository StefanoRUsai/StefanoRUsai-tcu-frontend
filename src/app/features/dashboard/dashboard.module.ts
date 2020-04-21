import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AppFooterModule} from '@coreui/angular';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import {BsLocaleService, PopoverModule} from 'ngx-bootstrap';
import {UserService} from '../../shared/_services/user.service';
import {NgReduxModule} from '@angular-redux/store';
import {CoreModule} from '../../core/core.module';
import { CustomComponent } from './custom/custom.component';
import {TranslateModule} from "@ngx-translate/core";
import {BreadcrumbActions} from "../../core/breadcrumb/breadcrumb.actions";
import {DialogComponent} from "../../core/card/dialog/dialog.component";
import {MatDialogModule, MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";


@NgModule({
  declarations: [DashboardComponent, CustomComponent],
    imports: [
        NgReduxModule,
        CommonModule,
        CoreModule,
        DashboardRoutingModule,
        AppFooterModule,
        PopoverModule.forRoot(),
        TranslateModule,
    ],
  providers: [
    UserService,
    BreadcrumbActions,
    BsLocaleService,
    DialogComponent,
    MatDialogModule,
    { provide: MAT_DIALOG_DATA, useValue: {} },
    { provide: MatDialogRef, useValue: {} }

  ],
  exports: [DashboardComponent]
})
export class DashboardModule { }
