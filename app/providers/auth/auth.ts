import { Injectable } from '@angular/core';
import { FirebaseAuth } from 'angularfire2';

@Injectable()
export class AuthService {

  constructor(
    private auth: FirebaseAuth
  ){}

  registerUser(email:string, password:string):Promise<any>{
    return this.auth.createUser({
      email: email,
      password: password
    })
    .then(() => this.auth.login({
      email: email,
      password: password
    }))
    .then(user => Promise.resolve( user ))
    .catch(error => Promise.reject( error ));
  }

  loginUser(email:string, password:string):Promise<any>{
    return this.auth.login({
      email: email,
      password: password
    })
    .then(user => Promise.resolve( user ))
    .catch(error => Promise.reject( error ));
  }

  logout(){
    this.auth.logout();
  }

  get session(){
    return this.auth;
  }


}

