import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowAddOfServer = false;
  serverCreationMessage = 'No server was created';
  serverName = 'Text from typescript';
  isServerCreated = false;

  //servers list
  serversList = ['Server 1', 'Server 2'];

  //constructor is runned on component creation
  constructor() {
    setTimeout(() => { this.allowAddOfServer = true; }, 2000);
  }

  ngOnInit() {
  }

  onCreateClick(){
    this.isServerCreated = true;
    this.serverCreationMessage = "Server created with name " + this.serverName;

    this.serversList.push(this.serverName);
  }

  // onServerNameInput(event: Event){
  //   this.serverName = (<HTMLInputElement>event.target).value;
  // }
}
