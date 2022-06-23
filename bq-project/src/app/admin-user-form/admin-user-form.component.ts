import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BdUserService } from '../services/bd-user.service';
import { Users } from '../models/workers';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss']
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  constructor(private fb: FormBuilder,private bduserService: BdUserService, private router:Router) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  addPerson() {
    // console.log(this.userForm.value);
    // console.log(this.userForm.get('roles')?.value);
    const USERS: Users = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      roles: {
        admin: this.userForm.get('roles')?.value=== 'true'? true:false,
      }
    };
    console.log(USERS);
    this.bduserService.postBdUserService(USERS).subscribe(data => {
      console.log('Producto agregado con éxito');
      this.router.navigate(['/admin']);
    })
  }

}
