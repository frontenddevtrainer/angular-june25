import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

import { filter } from "rxjs/operators"

@Component({
  selector: 'edureka-users-table',
  templateUrl: './users-table.component.html',
  styleUrls: ['./users-table.component.css']
})
export class UsersTableComponent implements OnInit {

  constructor(private users: UserService) { }

  city : string = "McKenziehaven"

  userList: any = [];

  ngOnInit(): void {
    this.users.getUsers("", "ASC", 10)
      .subscribe((users) => {
        this.userList = users
      })
  }

}
