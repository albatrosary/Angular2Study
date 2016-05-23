import {Component, Input} from '@angular/core'
import {TodoStore} from '../../services/todostore';

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
  `
})

export class TodoHead {
  private item: string;
  
  constructor(private todoStore: TodoStore) {}
  
  addTodo() {
    this.todoStore.add(this.item);
    this.item = null;
  }
}