(function(app) {
  var Search = function () {
    
  }
  Search.prototype.transform = function (value, hoge) {
    return value.filter((item)=>item.name.startsWith(hoge)) 
  }
        
  app.SearchPipe =
    ng.core
      .Pipe({
        name: 'search'
      })
      .Class({constructor: Search});

})(window.app || (window.app = {}));