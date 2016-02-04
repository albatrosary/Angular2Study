System.register(['angular2/platform/browser', '../components/home/home'], function(exports_1) {
    var browser_1, home_1;
    return {
        setters:[
            function (browser_1_1) {
                browser_1 = browser_1_1;
            },
            function (home_1_1) {
                home_1 = home_1_1;
            }],
        execute: function() {
            browser_1.bootstrap(home_1.AppComponent);
        }
    }
});
//# sourceMappingURL=main.js.map