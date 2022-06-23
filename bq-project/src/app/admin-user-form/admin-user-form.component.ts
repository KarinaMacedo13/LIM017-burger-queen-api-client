import { Component, Input, OnInit } from '@angular/core';
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
  title = 'Agregar Usuario';
  userID !:number;
  constructor(private fb: FormBuilder,private bduserService: BdUserService, private router:Router) {
    this.userForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      roles: ['', Validators.required],
    });
  }
  ngOnInit(): void {
    this.editForm();
    this.obtainId();
  }
  obtainId() {
  this.bduserService.disparador.subscribe(data => {
    console.log('asdasdasdasdsadasdasdasdasd', data)
    console.log(data.dataUser.id)
    this.userID = data.dataUser.id;
    return this.userID;
    console.log(this.userID);
  })
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
    console.log(this.userID);
    if(this.userID!== undefined) {
      //Edit product
      console.log(this.userID)
      this.bduserService.editBdUserService(this.userID,USERS).subscribe( () => {
        console.log('Actualizado con éxito');
      }
      )
    } else {
      //Creat product
      this.bduserService.postBdUserService(USERS).subscribe(data => {
        console.log('Producto agregado con éxito');
        this.router.navigate(['/admin']);
      })
    }
  }
  editForm() {
    this.bduserService.disparador.subscribe(data => {
      console.log('Recibiendo Data:', data)
      if(data.dataUser.id !== null) {
        this.title = 'Editar Usuario';
        this.userForm.setValue({
          email: data.dataUser.email,
          password: data.dataUser.password,
          roles: data.dataUser.roles.admin=== true? 'true':'false',
        })
      }
    })
  }
}
