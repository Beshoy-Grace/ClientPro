import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { ClientService } from 'src/app/services/client.service';

@Component({
  selector: 'app-client-details',
  templateUrl: './client-details.component.html',
  styleUrls: ['./client-details.component.css']
})
export class ClientDetailsComponent implements OnInit {

  id:string;
  client:Client;
  constructor(private rout :ActivatedRoute ,private cservice :ClientService) { }

  ngOnInit() {

    this.id = this.rout.snapshot.params['id'];

    this.cservice.detalisclient(this.id).valueChanges().subscribe(client => {
      this.client = client;
      console.log(this.client)
    }) 

  }

}
