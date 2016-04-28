import {Component} from 'angular2/core'
import {TodoHead} from './home.head'
import {TodoBody} from './home.body'

@Component({
  selector: 'my-app',
  template: `
    <h2>Todo</h2>
    <todo-head [todo-list]="todolist"></todo-head>
    <hr>
    <todo-body [todo-list]="todolist"></todo-body>
    `,
  directives: [TodoHead, TodoBody]
})

export class AppComponent {
  private todolist: string[] = [];
}
