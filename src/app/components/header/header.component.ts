import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import User from 'src/interfaces/user';

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
  public emailError : string | null = null

  constructor(private userService: UserService) { }

  ngOnInit(): void {

    this.userService.user
    .subscribe((response : User)=>{
      console.log(response, "user")
      this.userEmail = response.email
    }, (error : string)=>{
        console.log("error recieved");
        this.emailError = error;
    })

    this.userService.oneSecEvent.subscribe(()=>{
       // console.log(new Date().toISOString());
    })

  }

}
