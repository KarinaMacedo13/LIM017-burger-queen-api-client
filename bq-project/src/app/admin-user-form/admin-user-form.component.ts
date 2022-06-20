import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Users } from '../models/workers';
@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss']
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }
  
  addPerson() {
    console.log('holaaa', this.userForm.value);
    console.log(this.userForm.get('roles')?.value);
    const USERS: Users = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      roles: {
        admin: this.userForm.get('roles')?.value === 'yes'? true:false,
      }
    };
    // console.log(USERS);
  }
}
