import { Component, OnInit } from '@angular/core';
import { LoginForm } from 'src/interfaces/loginform';

@Component({
  selector: 'edureka-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  public form : LoginForm = { email : "", password : "" }

  constructor() { }

  ngOnInit(): void {
  }

}
