import {Component, Input} from 'angular2/core'

@Component({
  selector: 'todo-head',
  template: `
    <form role="form" (submit)="addTodo()">
      <div class="input-group">
        <input type="text" [(ngModel)]="item" placeholder="What needs to be done?" class="form-control">
        <span class="input-group-btn">
          <input type="submit" class="btn btn-primary" value="Add" name="add">
        </span>
      </div>
    </form>
  `,
  directives: []
})

export class TodoHead {
  public item;
  @Input('todo-list') todolist: string[];
  addTodo() {
    this.todolist.push(this.item);
    this.item = '';
  }
}
