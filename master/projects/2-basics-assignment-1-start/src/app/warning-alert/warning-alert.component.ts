import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'warning-alert',
  template: '<p align="center">Warning Alert!</p>',
  styles: ['p { color:red; font-size:2em; margin: 5px; }']
})
export class WarningAlertComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
