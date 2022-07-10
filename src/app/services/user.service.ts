import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, throwError } from 'rxjs';
import User from 'src/interfaces/user';

import { of } from "rxjs";
import { map } from "rxjs/operators"

@Injectable({
  providedIn: 'root'
})
export class UserService {

  // public user : BehaviorSubject<User> = new BehaviorSubject({ email : "" })

  // user: Observable<User> = from<User[]>([
  //   { email : "abc@def.com" },
  //   { email : "email2@def.com" }
  // ])

  // user: Observable<User> = of<User>({ email : "abc@def.com" })
  // .pipe(map((value)=>{
  //     value.timestamp = new Date()
  //     return value
  // }))
  // .pipe(map((value)=>{
  //   value.email = value.email.toUpperCase();
  //   return value
  // }))

  public user : any = throwError("error happened.")

  public oneSecEvent = interval(1000);

  constructor() { }
}
