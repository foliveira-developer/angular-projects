import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddOfServer = false;
  serverCreationMessage = 'No server was created';
  serverName = '';

  //constructor is runned on component creation
  constructor() {
    setTimeout(() => { this.allowAddOfServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateClick(){
    this.serverCreationMessage = "Server created!"
  }

  onServerNameUpdate(event: Event){
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
