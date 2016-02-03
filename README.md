# Angular2 Study

Branch
* master: Install essential libraries
* step2: Directive
* step3: Pipe
* step4: Routing(ngRoute)
* step5: Serviceの利用

## First Step

First, Try to do this!
[quickstart](https://angular.io/docs/ts/latest/quickstart.html)

## Create a project folder

```bash
mkdir SampleApp && cd $_
```

## Install essential libraries

### Use npm

```bash
npm init -y
npm install angular2@2.0.0-beta.1 --save
npm install rxjs@5.0.0-beta.1 --save
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
  
  <!-- 2. Load libraries -->
  <script src="node_modules/angular2/bundles/angular2-polyfills.js"></script>
  <script src="node_modules/rxjs/bundles/Rx.umd.js"></script>
  <script src="node_modules/angular2/bundles/angular2-all.umd.js"></script>
  
  <!-- 3. Load our 'modules' -->
</body>
</html>
```

or

```html
<!DOCTYPE html>
<html lang="ja">
<head>
  <meta charset="UTF-8">
  <title>Angular2 Study</title>
</head>
<body>
  <!-- 1. Display the application -->
  
  <!-- 2. Load libraries -->
  
  <!-- 3. Load our 'modules' -->
</body>
</html>
```

IE11 options Load library

```html
<script src="node_modules/es6-shim/es6-shim.min.js"></script>
```

### Use CDN

```html
```

## Simple development http server

### node:

```bash
npm install live-server
live-server
```

### node:

```bash
npm install http-server
http-server
```

### Ruby

```bash
ruby -run -e httpd -- -p 8000 
```

or

```bash
ruby -rwebrick -e 'WEBrick::HTTPServer.new(:DocumentRoot => "./", :Port => 8000).start'
```

### Python 2系

```bash
python -m SimpleHTTPServer
```

## Check Module

Add to the body tag of Index.html

```html
<!-- 1. Display the application -->
<my-app>Loading...</my-app>

<!-- 2. Load libraries -->
・・・

<!-- 3. Load our 'modules' -->
  <script>
(function(app) {
  app.AppComponent =
    ng
      .core
      .Component({
        selector: 'my-app',
        template: '<h1>My First Angular {{1+1}} App</h1>'
      })
      .Class({
        constructor: function() {}
      });
      
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
  </script>
```

"My First Angular 2 App" is displayed in the browser!
