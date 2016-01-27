/* global ng */
(function(app) {
  var App = function () {}
  
  App.prototype.someMethod = function () {
    return 'Some Method!';
  }
  
  /* Componentsの登録 */
  app.AppService =
    ng.core
      .Class({
        constructor: App
      });
})(window.app || (window.app = {}));