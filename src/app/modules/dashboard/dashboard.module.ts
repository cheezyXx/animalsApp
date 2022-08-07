import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from "@angular/common";

import { DashboardComponent } from "./pages/dashboard/dashboard.component";
import {DashboardService} from "./services/dashboard.service";
import {TodosModule} from "../todos/todos.module";

@NgModule({
  imports: [HttpClientModule, CommonModule, TodosModule],
  exports: [],
  declarations: [DashboardComponent],
  providers: [DashboardService],
})
export class DashboardModule {
}
