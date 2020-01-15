import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AngularFireDatabase , AngularFireList , AngularFireObject } from '@angular/fire/database';
import { Client } from '../Model/Client';
import { ActionSequence } from 'protractor';


@Injectable({
  providedIn: 'root'
})
export class ClientService {

clients :AngularFireList<any[]>
itmes: Observable<any[]>
client : AngularFireObject<any>


  constructor(private af :AngularFireDatabase) { 
    this.clients = this.af.list('/clients') as AngularFireList<Client[]>;
  }

  getClients()
  {
  return  this.clients.snapshotChanges();

  }

  detalisclient(id:string)
  {
   return    this.client = this.af.object('/clients/'+id) as AngularFireObject<Client>;
  }
 

  addnewclient(client)
  {
this.clients.push(client);
  }
}
