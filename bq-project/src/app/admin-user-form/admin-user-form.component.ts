import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss'],
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      id: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {}

  // addPerson() {
  //   console.log(this.userForm);
  //   class Users {
  //     id: number;
  //     email: string;
  //     password: string;
  //     roles: {
  //       admin: boolean;
  //     }
  //     constructor(id:number, email:string, password: string, roles: {admin: boolean}) {
  //       this.id = id;
  //       this.email = email;
  //       this.password = password;
  //       this.roles = roles;
  //     }
  //   }
  //   const USERS: Users = {
  //     id: this.id.get('id')?.value,
  //     email: this.userForm.get('email')?.value,
  //     password: this.userForm.get('password')?.value,
  //     roles: this.userForm.get('roles')?.value,
  //   };
  //   console.log(USERS);
  // }
}
