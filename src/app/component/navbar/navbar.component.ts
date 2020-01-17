import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isloginin:boolean;
  useremail:string;

  constructor(private as :AuthService,
    private router:Router,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
   this.doSomething();

 


  }

  async doSomething() {
    const user = await this.as.ckekclient()
       if (user) {
        this.isloginin=true;
        this.useremail = user.email;
      
    } else {
      this.isloginin=false;
       }
 }

 logout()
 {
   this.as.logout();
 }

}
