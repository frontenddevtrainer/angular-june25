import { Injectable } from '@angular/core';
import { BehaviorSubject, from, interval, Observable, throwError } from 'rxjs';
import User, { Login } from 'src/interfaces/user';

import { of } from "rxjs";
import { map } from "rxjs/operators"
import { HttpClient } from '@angular/common/http';
import { ConfigurationService } from './configuration.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient, private config: ConfigurationService) {

  }


  public login( form : Login ){
    return this.http.post(this.config.URLS.LOGIN, form)
  }


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

  public user: any = throwError("error happened.")

  public oneSecEvent = interval(1000);


  getUsers(city: string, order = "ASC", max = 10) {
    return this.http.get<unknown[]>(this.config.URLS.PUBLIC_USERS)

      .pipe(map((list) => {
        return list.splice(0, max)
      }))

      .pipe(map((list) => {

        if (city.length > 0) {
          return list.filter((person: any) => {
            return person.address.city === city
          })
        }

        return list

      }))
      .pipe(map((list) => {
        return list.sort((a: any, b: any) => {
          const aName = a.name.toUpperCase()
          const bName = b.name.toUpperCase()

          if (order === "ASC") {
            if (aName < bName) {
              return -1
            }
            if (aName > bName) {
              return 1
            }
            return 0
          }
          else {
            if (aName > bName) {
              return -1
            }
            if (aName < bName) {
              return 1
            }
            return 0
          }
        })
      }))
      .pipe(map((list) => {
        list.forEach((person: any) => {
          person.email = person.email.toLowerCase();
        })
        return list;
      }))
  }

}
