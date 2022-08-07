import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {LayoutComponent} from "./modules/layouts/layout/layout.component";
import {AuthModule} from "./modules/auth/auth.module";
import {DashboardModule} from "./modules/dashboard/dashboard.module";
import {MAT_SNACK_BAR_DEFAULT_OPTIONS, MatSnackBar} from "@angular/material/snack-bar";
import {Overlay} from "@angular/cdk/overlay";

@NgModule({
  declarations: [AppComponent, LayoutComponent],
  imports: [BrowserModule, AppRoutingModule, AuthModule, BrowserAnimationsModule, DashboardModule],
  providers: [MatSnackBar, {provide: MAT_SNACK_BAR_DEFAULT_OPTIONS, useValue: {duration: 5000}}, Overlay],
  bootstrap: [AppComponent],
})
export class AppModule {
}
