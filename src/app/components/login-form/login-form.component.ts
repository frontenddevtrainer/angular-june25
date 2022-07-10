import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';
import { LoginForm } from 'src/interfaces/loginform';

@Component({
  selector: 'edureka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public form : LoginForm = { email : "", password : "" }

  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

  emailChange(){
    this.userService.user.next({ email : this.form.email })
  }

}
