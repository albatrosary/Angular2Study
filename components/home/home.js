(function(app) {
  
  var Home = function () {}
  
  Home.prototype.someMethod = function () {
    
  }
  
  /* Componentsの登録 */
  app.HomeComponent =
    ng.core.Component({
        selector: 'my-home',
        templateUrl: 'components/home/home.html'
      })
      .Class({
        constructor: Home
      });
})(window.app || (window.app = {}));