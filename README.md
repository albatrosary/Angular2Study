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

### $invalid と $dirty を利用する

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
