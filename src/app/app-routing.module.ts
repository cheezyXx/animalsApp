import {NgModule} from "@angular/core";
import {RouterModule, Routes} from "@angular/router";

import {LayoutComponent} from "./modules/layouts/layout/layout.component";
import {LoginComponent} from "./modules/auth/pages/login/login.component";
import {RegisterComponent} from "./modules/auth/pages/register/register.component";
import {DashboardComponent} from "./modules/dashboard/pages/dashboard/dashboard.component";
import {SetPasswordComponent} from "./modules/auth/pages/set-password/set-password.component";
import {ProtectRouteGuard} from "./common/guards/protect-route.guard";

const routes: Routes = [
  {
    path: "",
    redirectTo: "login",
    pathMatch: "full",
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [ProtectRouteGuard],
  },
  {
    path: "",
    component: LayoutComponent,
    children: [
      {
        path: "login",
        component: LoginComponent,
      },
      {
        path: "register",
        component: RegisterComponent,
      },
      {
        path: "user/:userId/set-password/:token",
        component: SetPasswordComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
