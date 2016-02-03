(function(app) {
  var vm;
  
  function Todo() {
    vm = this;
    this.todoList = [];
  }

  Todo.prototype.addTodo = function () {
    vm.todoList.push(vm.item);
    vm.item = '';
  };

  Todo.prototype.removeTodo = function (index) {
    vm.todoList.splice(index, 1);
  };
  
  /* Componentsの登録 */
  app.TodoComponent =
    ng.core
      .Component({
        selector: 'app-todo',
        templateUrl: 'components/todo/todo.html'
      })
      .Class({
        constructor: Todo
      });
})(window.app || (window.app = {}));