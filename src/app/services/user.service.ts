import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import User from 'src/interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user : BehaviorSubject<User> = new BehaviorSubject({ email : "" })

  constructor() { }
}
