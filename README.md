# Angular2 Study - Step4: Routing(ngRoute)

Angular2のルーティングはAngular1のものとは異なりコンポーネントルーティングと呼ばれています。準備として、ルーティングのためコンポーネントを2つ作ります。

(components/home/home.html)
```html
<h1>My First {{name}} {{1+1}} App</h1>
```

(components/home/home.js)
```javascript
(function(app) {
  
  var Home = function () {
    this.name = 'Angular';
  }
  
  Home.prototype.someMethod = function () {}
  
  /* Componentsの登録 */
  app.HomeComponent = ng.core
    .Component({
      selector: 'app-home',
      templateUrl: 'components/home/home.html'
    })
    .Class({
      constructor: Home
    });
})(window.app || (window.app = {}));
```


(components/todo/todo.html)
```html
<h1>Todos</h1>
```

(components/todo/todo.js)
```javascript
(function(app) {
  
  var Todo = function () {}
  
  Todo.prototype.someMethod = function () {}
  
  app.TodoComponent = ng.core
    .Component({
      selector: 'app-todo',
      templateUrl: 'components/todo/todo.html'
    })
    .Class({
      constructor: Todo
    });
})(window.app || (window.app = {}));
```

`index.html`でこのコンポーネントを読み込ませます
```html
<!-- 3. Load our 'modules' -->
<script src="components/home/home.js"></script>
<script src="components/todo/todo.js"></script>
```

次にルーティングの設定を行います。ルーティングの設定は`scripts/main.js`で行います。ディレクティブは

* router-outle
* routerLink

を利用します。まとめると下記のようになります：

(scripts/main.js)
```javascript
(function(app) {
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
      
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent, [ng.router.ROUTER_PROVIDERS]);
  });
})(window.app || (window.app = {}));
```

このファイルを`index.html`から読み込ませると完了です。

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <base href="/">
  <title>Document</title>
</head>
<body>
  <!-- 1. Display the application -->
  <app-main>loading...</app-main>
  
  <!-- 2. Load libraries -->
  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
  <script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
  <script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>

  <!-- 3. Load our 'modules' -->
  <script src="components/home/home.js"></script>
  <script src="components/todo/todo.js"></script>
  <script src="scripts/main.js"></script>
</body>
</html>
```
