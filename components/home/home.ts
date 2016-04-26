import {Component} from 'angular2/core'
import {DetailApp} from '../detail/detail'

@Component({
  selector: 'my-app',
  template: `
    <detail-app bank-name="RBC" account-id="4747" (everySecond)="everySecond()" (everyFiveSeconds)="everyFiveSeconds()"></detail-app>
  `,
  directives: [DetailApp]
})
export class AppComponent {
  everySecond() { console.log('second'); }
  everyFiveSeconds() { console.log('five seconds'); }
}