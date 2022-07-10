import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'edureka-header',
  templateUrl: './header.component.html',
  // template : `<h1>{{applicationName}}</h1>
  //   Multiline Example
  // `,
  styleUrls: ["../../text.css", './header.component.css']
})
export class HeaderComponent implements OnInit {

  public applicationName = "Edureka News"
  public userEmail = ""

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.user.subscribe((response)=>{
      this.userEmail = response.email
    })

  }

}
