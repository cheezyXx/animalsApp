import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import { DashboardService } from "./services/dashboard.service";

@NgModule({
  imports: [HttpClientModule, CommonModule],
  exports: [],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {
}
