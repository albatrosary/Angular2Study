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