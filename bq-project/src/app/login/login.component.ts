import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
    })
  }
  ngOnInit(): void {}

  loginPerson() {
    console.log(this.loginForm);
    class User {
      email: string;
      password: string;
      constructor(email: string, password: string){
        this.email = email;
        this.password = password;
      }
    }
    const USER: User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    }
    console.log(USER);
  }

}
