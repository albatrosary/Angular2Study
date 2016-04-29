import {Injectable} from 'angular2/core';

@Injectable()
export class TodoStore {
  
  private todolist: string[] = [];
  
  public delete(index: number) {
    this.todolist.splice(index, 1);
  }
  
  public add(todo: string) {
    this.todolist.push(todo);
  }
  
  public getList() {
    return this.todolist;
  }
}