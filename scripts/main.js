/* global ng */

(function(app) {
  // Since both ng.core.Component and ng.router.RouteConfig are decorators you can write:
  
  app.AppComponent = ng.core
    .Class({
      constructor: function () {}
    });
  
  app.AppComponent = ng.core
    .Component({
       selector: 'app-main',
       template: `
          <h1>Component Router</h1>
          <a [routerLink]="['Home']">Home</a>
          <a [routerLink]="['Todo']">Todos</a>
          <router-outlet></router-outlet>
        `,
       directives:[
         ng.router.ROUTER_DIRECTIVES
       ]
    })(app.AppComponent);
  
  app.AppComponent =
    ng.router
      .RouteConfig([
        {path: '/home', name: 'Home', component: app.HomeComponent, useAsDefault: true},
        {path: '/todo', name: 'Todo', component: app.TodoComponent}
      ])(app.AppComponent);
      
  // DOMContentLoadedは "DOMの構築が完了したら発火するイベント"
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent, [ng.router.ROUTER_PROVIDERS]);
  });
})(window.app || (window.app = {}));
