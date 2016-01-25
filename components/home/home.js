(function(app) {
  
  var Home = function () {
    this.name = 'Angular';
  }
  
  Home.prototype.someMethod = function () {
    
  }
  
  /* Componentsの登録 */
  app.HomeComponent =
    ng.core.Component({
        selector: 'app-home',
        templateUrl: 'components/home/home.html'
      })
      .Class({
        constructor: Home
      });
})(window.app || (window.app = {}));