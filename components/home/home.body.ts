import {Component, Input} from 'angular2/core'
import {DetailApp} from './home.detail'

@Component({
  selector: 'todo-body',
  template: `
    <div>
      <todo-detail *ngFor="let item of todolist; let i = index"
      todo-data="{{item}}"
      (on-delete)="onDelete(i)"></todo-detail>
    </div>
    `,
  directives: [DetailApp]
})

export class TodoBody {
  @Input('todo-list')
  private todolist: string[];
  
  onDelete(index) {this.todolist.splice(index, 1);}
}
