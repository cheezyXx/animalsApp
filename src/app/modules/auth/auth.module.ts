import {NgModule} from "@angular/core";
import {HttpClientModule} from "@angular/common/http";
import {ReactiveFormsModule} from "@angular/forms";
import {MatFormFieldModule} from "@angular/material/form-field";
import {RouterModule} from "@angular/router";
import {MatButtonModule} from "@angular/material/button";
import {MatInputModule} from "@angular/material/input";
import {CommonModule} from "@angular/common";

import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {RegisterService} from "./services/register.service";
import {LoginService} from "./services/login.service";
import {SetPasswordComponent} from "./pages/set-password/set-password.component";

@NgModule({
  declarations: [LoginComponent, RegisterComponent, SetPasswordComponent],
  providers: [RegisterService, LoginService],
  imports: [HttpClientModule, ReactiveFormsModule, MatFormFieldModule, RouterModule, MatButtonModule, MatInputModule, CommonModule],
})
export class AuthModule {
}
