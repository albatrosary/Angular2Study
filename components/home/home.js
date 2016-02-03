System.register(['angular2/core'], function(exports) {
  var core;
  return {
    setters:[
      function (args) {
        core = args;
      }],
    execute: function() {
      var vm;
      
      var constructor = function() {
        vm = this;
        vm.name = 'Angular'
      }
      
      var Component = core.Class({
        constructor: constructor
      });

      Component = 
        core.Component({
          selector: 'my-app',
          templateUrl: 'components/home/home.html'
        })(Component);

      exports("AppComponent", Component);
    }
  }
});