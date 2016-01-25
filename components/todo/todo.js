(function(app) {
  
  var Todo = function () {}
  
  Todo.prototype.someMethod = function () {
    
  }
  
  /* Componentsの登録 */
  app.TodoComponent =
    ng.core.Component({
        selector: 'my-todo',
        templateUrl: 'components/todo/todo.html'
      })
      .Class({
        constructor: Todo
      });
})(window.app || (window.app = {}));