/* eslint-disable prettier/prettier */
import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { BdUserService } from '../../../services/bd-user.service';
import { Users } from '../../../models/workers';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admin-user-form',
  templateUrl: './admin-user-form.component.html',
  styleUrls: ['./admin-user-form.component.scss'],
})
export class AdminUserFormComponent implements OnInit {
  userForm: FormGroup;
  title = 'Agregar Usuario';
  userID!: number;
  constructor(
    private fb: FormBuilder,
    private bduserService: BdUserService,
    private toastr: ToastrService
  ) {
    //Get the values ​​using the formBuilder method
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
  //Get the id of the admin user list
  obtainId() {
    this.bduserService.disparador.subscribe(data => {
      return (this.userID = data.dataUser.id);
    });
  }
  //Edit person and create persona, create object user
  addPerson() {
    const USERS: Users = {
      email: this.userForm.get('email')?.value,
      password: this.userForm.get('password')?.value,
      roles: {
        description: this.userForm.get('roles')?.value,
        admin: this.userForm.get('roles')?.value === 'admin' ? true : false,
      },
    };
    if (this.userID !== undefined) {
      //Edit product
      this.bduserService.editBdUserService(this.userID, USERS).subscribe(
        data => {
          this.toastr.success(
            'El usuario fue actualizado con éxito',
            'Usuario Actualizado'
          );
          this.userForm.reset();
          this.bduserService.update.emit({
            update: true,
          });
        },
        error => {
          console.log(error);
        }
      );
    } else {
      //Creat product if id is defined
      this.bduserService.postBdUserService(USERS).subscribe(
        data => {
          this.toastr.success(
            'El usuario fue agregado con éxito',
            'Usuario Agregado'
          );
          this.userForm.reset();
          this.bduserService.update.emit({
            update: true,
          });
        },
        error => {
          console.log(error);
        }
      );
    }
  }
  //Get data from userListComponent and reassign values
  editForm() {
    this.bduserService.disparador.subscribe(data => {
      console.log('Recibiendo Data:', data);
      if (data.dataUser.id !== null) {
        this.title = 'Editar Usuario';
        this.userForm.setValue({
          email: data.dataUser.email,
          password: '',
          roles:data.dataUser.roles.description === 'admin'? 'admin':data.dataUser.roles.description === 'weiter'?'weiter':'chef',
        });
      }
    });
  }
}
