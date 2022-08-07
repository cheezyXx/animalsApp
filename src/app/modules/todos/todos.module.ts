import {NgModule} from "@angular/core";

import {TodoListComponent} from "./components/todo-list/todo-list.component";
import {TodoSearchComponent} from "./components/todo-search/todo-search.component";
import {LoadMoreComponent} from "./components/load-more/load-more.component";
import {MatListModule} from "@angular/material/list";

@NgModule({
  providers: [],
  declarations: [TodoListComponent, TodoSearchComponent, LoadMoreComponent],
  imports: [
    MatListModule
  ],
  exports: [TodoListComponent],
})
export class TodosModule {

}
