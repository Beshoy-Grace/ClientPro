import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/Model/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {

  clients:any[];
  totalowrd:number;

  constructor(
    public clientService:ClientService
  ) { }

  ngOnInit() {
    
   
      this.clientService.getClients().subscribe(client =>{
        this.clients= client.map(change =>{
          return {
            $key :change.payload.key,
            ...change.payload.val()
          }
       
        })
        this.getalltotal();
        console.log(this.clients)
        
      })
     
  }
 



  getalltotal()
  {
     let total =0 ;
     for(let i = 0; i < this.clients.length ; i++)
     {
        total += parseFloat( this.clients[i].balance);
     }
     this.totalowrd = total;

     console.log(this.totalowrd)
  }

}
