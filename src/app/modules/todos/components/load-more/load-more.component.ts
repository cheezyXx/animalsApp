import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'app-load-more',
  templateUrl: 'load-more.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoadMoreComponent {
}
