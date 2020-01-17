import { Component, OnInit } from '@angular/core';
import { RouterLinkActive, ActivatedRoute, Router } from '@angular/router';
import { Client } from 'src/app/Model/Client';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService } from 'angular2-flash-messages';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email:string;
  password:number;
  constructor(private as :AuthService,
    private router:Router,private flashMessagesService: FlashMessagesService) { }

  ngOnInit() {
  }

  onsubmit(f)
  {
    let data =f.value;
    this.as.register(this.email,this.password)
    .then(data =>{
      this.flashMessagesService.show("ُNew user registered", {cssClass:'alert-success', timeout:4000})
      this.router.navigate(["/"]);
    })
    .catch(err =>{
      this.flashMessagesService.show(err.messages, {cssClass:'alert-danger', timeout:4000})
      this.router.navigate(["/register"]);
    })
  }


  
}
