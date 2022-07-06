import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Workers } from '../models/workers';
import { BdUserService } from '../services/bd-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private toastr: ToastrService, private bduserService: BdUserService, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.obtenerBd();
  }

  loginPerson() {
   /*  console.log('soy loginForm', this.loginForm);
    this.bduserService.getBdUserService().subscribe(res =>{
      console.log('soy res', res);
      const user = res.find((a:Workers)=>{
        console.log('soy a', a);
        return a.email=== this.loginForm.value.email && a.password=== this.loginForm.value.password && a.roles.admin===true;
      });console.log('soy user:', user);
      if(user){

        this.loginForm.reset();
        this.router.navigate(['admin/user'])
      } else{
        console.log('soy error:', 'No tienes los accesos');
        this.toastr.error('Permisos denegados', 'No tienes acceso');
        this.loginForm.reset();
      }
    }) */
    class User {
      email: string;
      password: string;
      constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
      }
    }
    const USER: User = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log('soy user', USER);
    this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen');
  
  
  }

  // obtenerBd() {
  //   class bduserService {
  //     constructor(private _bduserService: BdUserService) {}
  //     bdService() {
  //       this._bduserService.getBdUserService().subscribe(
  //         user => {
  //           console.log(user);
  //         },
  //         error => {
  //           console.log(error);
  //         }
  //       );
  //     }
  //   }
  // }
}
// class bduserService {
//   constructor(private bduserService: BdUserService) {}
//   ngOnInit():
//   obtenerBd() {
//     this.bduserService.getBdUserService().subscribe(user => {
//     console.log(user);},
//     error => {console.log(error);
//     })
//   }
// }

// export class loginComponent implements OnInit {
//   constructor(private _bduserService: BdUserService) {
//   }
//   bdService () {
//   this._bduserService.getBdUserService().subscribe(user => {
//     console.log(user);},
//     error => {console.log(error);
//   })
//   }
// }
