import { Component, OnInit } from '@angular/core';
import { catchError } from 'rxjs';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'edureka-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  form = { email: "", password: "", remember: false }

  serverError: string = "";

  constructor(private user: UserService) { }

  ngOnInit(): void {
  }

  login() {
    console.log(this.form)
    this.user.login(this.form).pipe(catchError((err) => {
      this.serverError = "Error while login."
      return err
    }))
      .subscribe(() => {

      })
  }

}
