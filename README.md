# Angular2 Study - Step7: SystemJS

## Install essential libraries

### Use npm

```bash
npm install systemjs --save
```

HTML

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Angular2 Study</title>
</head>
<body>
  <!-- 1. Display the application -->
  <my-app>Loading...</my-app>
  
  <!-- 2. Load libraries -->
  <script src="node_modules/systemjs/dist/system-polyfills.js"></script>
  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
  <script src="node_modules/systemjs/dist/system.src.js"></script>
  <script src="node_modules/rxjs/bundles/Rx.js"></script>
  <script src="node_modules/angular2/bundles/angular2.dev.js"></script>
  
  <!-- 3. Load our 'modules' -->
</body>
</html>
```

## SystemJS Config

```javascript
<!-- 3. Load our 'modules' -->
<script>
  System.config({
    packages: {        
      scripts: {
        format: 'register',
        defaultExtension: 'js'
      },       
      components: {
        format: 'register',
        defaultExtension: 'js'
      }
    }
  });
  System.import('scripts/main')
    .then(null, console.error.bind(console));
</script>
```

各モジュールはSystemJSを利用すると

(scripts/main.js)
```javascript
System.register(['angular2/platform/browser', '../components/home/home'], function(exports) {
  var browser, app;
  return {
    setters:[
      function (args) {
        browser = args;
      },
      function (args) {
        app = args;
      }],
    execute: function() {
      browser.bootstrap(app.AppComponent);
    }
  }
});
```

(components/home/home.js)
```javascript
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
```

(components/home/home.html)
```html
<h1>My First {{name}} {{1+1}} App</h1>
```
