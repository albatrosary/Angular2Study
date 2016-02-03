# Angular2 Study - Step2: Pipe

カスタムフィルタを作成します。カスタムフィルタはAngular2ではPipeを使って作成します。先ほどの一覧を絞り込むためのPipeを作成します。

## Create pipe folder

```bash
mkdir pipes && cd $_
touch search.pipe.js
```

## Pipe

Pipeを利用するためには`ng.core.Pipe`キーワードを利用します。つまり

```javascript
(function(app) {
  var [class_name] = function () {
    
  }
  [class_name].prototype.transform = function (value, args...) {
  
  }
        
  app.SearchPipe =
    ng.core
      .Pipe({
        name: '[pipe_name]'
      })
      .Class({constructor: [class_name]});

})(window.app || (window.app = {}));
```

valueとargs は 次のような関係にあります：`value | pipes args...`
`transform`メソッドを使い文字の変換等を行います。

前方一致検索の場合にはクラスを`Search`とすると次のようになります：

```javascript
Search.prototype.transform = function (value, hoge) {
  return value.filter((item)=>item.name.startsWith(hoge)) 
}
```

index.htmlにこのpipeをロードさせインジェクトすると利用可能となります：

```html
<!-- 3. Load our 'modules' -->
<script src="pipes/search.pipe.js"></script>
```

```javascript
```
