import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-servers',
    //selector: '[app-servers]',
    //selector: '.app-servers',
    templateUrl: './servers.component.html'
    // template: '
    //     <app-server></app-server>
    //     <app-server></app-server>'
})

export class ServersComponent implements OnInit { 

    allowNewServer = false;
    serverCreationStatus = "No server was created";
    serverName = "TestServer";
    serverCreated = false;
    servers = ["TestServer", "TestServer2"];

    constructor() {
        setTimeout(() => {
            this.allowNewServer = true;
        }, 2000)
    }

    ngOnInit() {

    }

    onCreateServer(){
        this.serverCreationStatus = "Server was created! Name is " + this.serverName;
        this.servers.push(this.serverName);
        this.serverCreated = true;
    }

    onUpdateServerName(event: Event){
        console.log(event);

        this.serverName = (<HTMLInputElement>event.target).value;
    }
}