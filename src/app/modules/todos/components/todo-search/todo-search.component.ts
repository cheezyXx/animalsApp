import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-todo-search',
  templateUrl: 'todo-search.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TodoSearchComponent {
}
