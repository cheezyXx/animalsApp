import { ChangeDetectionStrategy, Component } from '@angular/core';
import { DashboardService } from "../../services/dashboard.service";
import { take } from "rxjs";

@Component({
  selector: 'dashboard-component',
  templateUrl: 'dashboard.component.html',
  styleUrls: ["dashboard.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class DashboardComponent {

  statistics = this.dashboardService.getStatistics();

  constructor(private dashboardService: DashboardService) {
  }
}
