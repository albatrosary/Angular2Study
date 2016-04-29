import {Component} from 'angular2/core'
import {TodoHead} from './home.head'
import {TodoBody} from './home.body'
import {TodoStore} from '../../services/todostore';

@Component({
  selector: 'my-app',
  template: `
    <h2>Todo</h2>
    <todo-head></todo-head>
    <hr>
    <todo-body></todo-body>
    `,
  directives: [TodoHead, TodoBody],
  providers: [TodoStore]
})

export class AppComponent {}
