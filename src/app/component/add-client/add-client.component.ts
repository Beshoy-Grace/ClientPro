import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client';
import { FlashMessagesService } from 'angular2-flash-messages';
import { ClientService } from 'src/app/services/client.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css']
})
export class AddClientComponent implements OnInit {

  client :Client= {
    firstName:'',
    lastName:'',
    email:'',
    balance:0,
  }

  disabledBalanceOnAdd:boolean = false;
  constructor( private flashMessagesService: FlashMessagesService , private cserver :ClientService,
                private router :Router) { }

  ngOnInit() {
  }

  onsubmit(f){
     
    let data = f.value;
   
    
      this.cserver.addnewclient(data);
      this.flashMessagesService.show("New client addes", {cssClass:'alert-success', timeout:4000})
      this.router.navigate(["/"]);
      
      if(this.disabledBalanceOnAdd)
      {
        data.balance = 0;
      }
    

  }

}
