import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { ClientService } from 'src/app/services/client.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-edit-client',
  templateUrl: './edit-client.component.html',
  styleUrls: ['./edit-client.component.css']
})
export class EditClientComponent implements OnInit {

  client :Client= {
    firstName:'',
    lastName:'',
    email:'',
    balance:0,
  }
  disabledBalanceupdate:boolean= true;
  id:string;
  constructor(private rout :ActivatedRoute ,private cservice :ClientService,
    private router:Router,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {

    this.id = this.rout.snapshot.params['id'];

    this.cservice.detalisclient(this.id).valueChanges().subscribe(client => {
      this.client = client;
     
    }) 
  }

  onsubmit(f){
     
    let data = f.value;
   
    
      this.cservice.updateclient(this.id,data);
      this.flashMessagesService.show("ُEideted Client", {cssClass:'alert-success', timeout:4000})
      this.router.navigate(['/client/'+this.id]);
      
    

  }

}
