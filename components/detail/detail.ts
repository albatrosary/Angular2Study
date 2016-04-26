import {Component, Input, Output, EventEmitter} from 'angular2/core'

@Component({
  selector: 'detail-app',
  template: `
    <div>Bank Name: {{bankName}}</div>
    <div>Account Id: {{id}}</div>
    <div>normalizedBankName: {{normalizedBankName}}</div>
  `
})

export class DetailApp {
  @Input('bank-name') bankName: string;
  @Input('account-id') id: string;
  normalizedBankName: string;
  @Output() everySecond = new EventEmitter();
  @Output('everyFiveSeconds') five5Secs = new EventEmitter();
  constructor() {
    setInterval(() => this.everySecond.emit("event"), 1000);
    setInterval(() => this.five5Secs.emit("event"), 5000);
    this.normalizedBankName = 'ほげ'
  }
}