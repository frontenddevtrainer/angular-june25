import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from 'src/app/services/user.service';
import { RegisterForm } from 'src/interfaces/user';

@Component({
  selector: 'edureka-register-page',
  templateUrl: './register-page.component.html',
  styleUrls: ['./register-page.component.css']
})
export class RegisterPageComponent implements OnInit {

  // {
  //   firstName,
  //   lastName,
  //   email,
  //   password,
  //   address : {
  //     city,
  //     pincode
  //   }
  // }

  registerForm = new FormGroup({
      firstName : new FormControl(""),
      lastName : new FormControl(""),
      email : new FormControl(""),
      password: new FormControl(""),
      address : new FormGroup({
          city : new FormControl(""),
          pincode : new FormControl()
      })
  })

  constructor( private user : UserService) { }

  ngOnInit(): void {
  }

  register(){
      this.user.register(this.registerForm.value as RegisterForm).subscribe(()=>{})
  }
}
