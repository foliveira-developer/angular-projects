import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`.after-log {color:white;}`]
})
export class AppComponent {
  isDisplayed = false;
  logList = [""];
  counter = 0;

  //toogle display on click
  onDisplayClick(){
    if(this.isDisplayed)
      this.isDisplayed = false;
    else
      this.isDisplayed = true;

    this.logList.push("Log nº" + String(++this.counter));
  }

  isAfterLog(log){
    if(this.logList.indexOf(log) >= 5)
      return true;
    else
      return false;
  }

  getColor(log){
    if(this.isAfterLog(log))
      return 'blue';
    else
      return 'none';
  }


}
