(function(app) {
  var Home = function (AppService) {
    this.name = AppService.someMethod();
  }
  
  /* Componentsの登録 */
  app.HomeComponent =
    ng.core
      .Component({
        selector: 'app-home',
        templateUrl: 'components/home/home.html',
        providers: [app.AppService]
      })
      .Class({
        constructor: [app.AppService, Home]
      });
})(window.app || (window.app = {}));