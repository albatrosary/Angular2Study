# Angular2 Study

## Install essential libraries

### Use npm

```bash
npm i typescript --save-dev
npm i concurrently --save-dev
npm i lite-server --save-dev
```

## main.ts

`main.js`をTypescriptで記述します

(scripts/main.js)
```javascript
System.register(['angular2/platform/browser', '../components/home/home'], function(exports) {
  ...
});
```
は

(scripts/main.ts)
```typescript
import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from '../components/home/home'
```

`setters`や`execute`は記載する必要が無く`browser.bootstrap(app.AppComponent);`の部分は

```typescript
bootstrap(AppComponent);
```

## home.ts

同様に

(components/home/home.ts)
```typescript
import {Component} from 'angular2/core'

@Component({
  selector: 'my-app',
  templateUrl: 'components/home/home.html'
})
export class AppComponent {
  public name = 'Angular';
}
```

## typescript設定

Angular2チュートリアルにもあるように`tsconfig.json`を定義します

```json
{
  "compilerOptions": {
    "target": "es5",
    "module": "system",
    "moduleResolution": "node",
    "sourceMap": true,
    "emitDecoratorMetadata": true,
    "experimentalDecorators": true,
    "removeComments": false,
    "noImplicitAny": false
  },
  "exclude": [
    "node_modules"
  ]
}
```

## npm コマンドの設定

こちらもAngular2チュートリアルにしたがい

```json
  "scripts": {
    "tsc": "tsc",
    "tsc:w": "tsc -w",
    "lite": "lite-server",
    "start": "concurrent \"npm run tsc:w\" \"npm run lite\" "
  },
```

## 実行

npnコマンドで実行します

```bash
npm start
```
