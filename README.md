# Angular2 Study - Step2: ディレクティブ

ディレクティブの評価を行うため下記`template`の中を見ていきます

```
(function(app) {
  app.AppComponent =
    ng.core
      .Component({
        selector: 'my-app',
        template: `
        <input type="text" [(ngModel)]="hoge">
        <span>{{hoge}}</span>
        `
      })
      .Class({
        constructor: function() {}
      });
      
  document.addEventListener('DOMContentLoaded', function() {
    ng.platform.browser.bootstrap(app.AppComponent);
  });
})(window.app || (window.app = {}));
```

### ngModel

ngModelを使ってデータバインディングを行います。

```html
<input type="text" [(ngModel)]="hoge">
<span>{{hoge}}</span>
```

### value

[value]を利用し、データバインドしますが、こちらは片方向のバインドです。

```html
<input type="text" [(ngModel)]="hoge">
<input [value]="hoge">
```

### ngIf

もう少しプログラムチックな動きをさせるために ngIf を利用してみます。テキストボックスに入力した値が 1 のときにメッセージを出力するというロジックを記述してみます。   

```html
template: `
<input type="text" [(ngModel)]="hoge">
<span *ngIf="hoge==='1'">1が入力されました<span>
`,
directives: [ng.common.NgIf]
``` 
### ng-invalid と ng-dirty

テキストボックスに対してバリデーションチェックを行います。この部分に関してはAngular1と同じです。簡単に必須チェックを行いましょう。先ほどのサンプルはテキストボックスに required を入れることで必須項目となります。
```html
<input type="text" [(ngModel)]="hoge" required>
```
画面上、警告も何も表示されないので何が起きているのか確認できませんが、カスケードスタイルシートを定義するとよく理解できます。headタグの中に次の定義をしてください：  
```html
<style>
  input.ng-invalid {
    border-color: #ff0000;
  }
</style>
```
何も入力されていないときにはテキストボックスの縁が赤くなっていることが確認できます。ただ、これだと入力前から赤いので UI としてはイマイチといった感じです。ここで ng-dirty を利用します。カスケードスタイルシートを次のように変更してください：  
```html
<style>
  input.ng-invalid.ng-dirty {
    border-color: #ff0000;
  }
</style>
```
こうすることで入力前は警告なしで、入力後、空欄にした場合は赤くなることが確認できます。

### $invalid と $dirty を利用する（ちょっと寄り道）

入力されてなかった場合、赤くなりましたがメッセージも表示します。メッセージを表示するためには formタグ を用意し「名前」をつける必要があります。formタグ名前を「demo」としテキストボックスの名前を「username」とします。警告メッセージは「必須入力です」にしましょう。するとbodyタグの中身は次のようになります。
```html
.Component({
  selector: 'my-app',
  template: `
  <form #hogeForm="ngForm">
    <input type="text" ngControl="name" #name="ngForm" [(ngModel)]="hoge" required>
    <p [hidden]="!name.dirty || name.valid">必須入力です</p>
  </form>
  `
})
```
### ng-minlength と ng-maxlength

(修正中)

更に、入力された文字の長さを定義することができます。usernameの長さを4文字以上、8文字未満として定義します。
```html
<form name="demo">
  <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
  <p ng-show="demo.username.$invalid && demo.username.$dirty">必須入力です</p>
</form>
```
機能に合わせてメッセージも変更します。$errorを使うことでメッセージの幅が広がります。
```html
<form name="demo">
  <input type="text" name="username" ng-model="hoge" ng-minlength="4" ng-maxlength="8" required>
  <p ng-show="demo.username.$invalid && demo.username.$dirty">入力された値が不正です</p>
  <p ng-show="demo.username.$error.minlength">4文字以下です</p>
  <p ng-show="demo.username.$error.maxlength">8文字以上入力されています</p>
</form>
```
入力系の画面を作成する場合は、こういった AngularJS の機能を使うことでJavaScriptを書かなくても多くの機能を実装することができます。ビルトインディレクティブの威力といったところです。次に一覧を作成し、さらにディレクティブの機能について触れていきます。

### ngFor

コンストラクタでデータを定義し ngFor で定義したデータを表示します。  
先ほどのform終了タグの下に追加します。
```html
.Component({
  selector: 'my-app',
  template: `
  <ul>
    <li *ngFor="#data of demoData">{{data.name}} - {{data.age}}</li>
  </ul>
  `
})
.Class({
  constructor: function() {
    this.demoData = [
      {name: '山田', age: 24},
      {name: '田中', age: 28},
      {name: '佐藤', age: 18},
      {name: '井上', age: 32},
      {name: '高橋', age: 46}
    ]
  }
});
```

(下記未更新)


一覧表示されました。ここからバインディングの威力が問われます。filter という機能を実装します。  
```
*ngFor="#data of demoData"
```
の部分に手を加えます。
```
*ngFor="#data of demoData"
ng-repeat="data in demoData | filter: search"
```
次に ng-model として search と定義したテキストボックスを用意います。先ほどのサンプルは  
```html
<input type="text" ng-model="search">
<div ng-init="
  demoData = [
    {name: '山田', age: 24},
    {name: '田中', age: 28},
    {name: '佐藤', age: 18},
    {name: '井上', age: 32},
    {name: '高橋', age: 46}
  ]
"></div>
<ul>
  <li ng-repeat="data in demoData | filter: search">{{data.name}} - {{data.age}}</li>
</ul>
```
簡易検索ができました。たったこれだけのことで今まででは高機能だったものを実装することができました。

### filter をもう少し

filter というキーワードが出てきましたのでもう少しフィルターについて見てみます。uppercase というフィルターを利用するとはじめに実装した表示を大文字にすることができます：
```html
<input type="text" [(ngModel)]="hoge">
{{hoge | uppercase}}
```
同じように ng-show で使ったサンプルでは
```html
<input type="text" [(ngModel)]="hoge">
<div ngIf="(hoge | uppercase)==='A'">{{hoge}}が入力されました</div>
```

