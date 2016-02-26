# Angular2 Study - Step5: Serviceの利用

ビジネスロジックを記述するServiceを作成します

```bash
mkdir service && cd $_
touch app.service.js
```

キーワードとしては`Injectable()`を利用します。すなわち

```javascript
/* global ng */
(function(app) {
  var App = function () {}
  
  App.prototype.someMethod = function () {
    return 'Some Method!';
  }
  
  /* Componentsの登録 */
  app.AppService =
    ng.core
      .Injectable()
      .Class({
        constructor: App
      });
})(window.app || (window.app = {}));
```

このサービスを利用するために`home.js`をカスタマイズします。`Components`に`providers`を設定します。

```javascript
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
```

`index.html`にサービスを読みこませると完了です

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
  <my-app>loading...</my-app>
  
  <!-- 2. Load libraries -->
  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
  <script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
  <script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>

  <!-- 3. Load our 'modules' -->
  <script src="service/app.service.js"></script>
  <script src="components/home/home.js"></script>
  <script src="components/todo/todo.js"></script>
  <script src="scripts/main.js"></script>
</body>
</html>
```

