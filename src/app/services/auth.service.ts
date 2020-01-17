import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth'
import { Observable } from 'rxjs'
import { first } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  user:Observable<firebase.User>
  constructor(private af :AngularFireAuth) 
  { this.user = af.user }

  login(email,password){
   return this.af.auth.signInWithEmailAndPassword(email,password);
  }

  ckekclient()
  {
    return this.af.authState.pipe(first()).toPromise();

  
  }

  logout()
  {
    this.af.auth.signOut();
  }

  register(email,password){
  return  this.af.auth.createUserWithEmailAndPassword(email,password);
  }
}
