import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client:Client;
  hasbalance:boolean=false;
  showBalanceUpdata:boolean= false;
  constructor(private rout :ActivatedRoute ,private cservice :ClientService,
              private router:Router,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

    this.id = this.rout.snapshot.params['id'];

    this.cservice.detalisclient(this.id).valueChanges().subscribe(client => {
      if(client.balance > 0 ){
        this.hasbalance=true;
      } 
      this.client = client;
      console.log(this.client)
    }) 

  }

  update(id)
  {
      this.cservice.updateclient(id,this.client);
      this.flashMessagesService.show("Balance updated", {cssClass:'alert-success', timeout:4000})
      this.router.navigate(['/client/'+this.id])
  }

  delete()
  {
    if(confirm("Are you wnat to delete this client?"))
    {
      this.cservice.delete(this.id);
      this.flashMessagesService.show("Client deleted", {cssClass:'alert-success', timeout:4000})
      this.router.navigate(["/"])
    }
    
  }
}
