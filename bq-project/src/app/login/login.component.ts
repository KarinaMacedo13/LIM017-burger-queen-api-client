import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { BdUserService } from '../services/bd-user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private fb: FormBuilder,private toastr: ToastrService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    // this.obtenerBd();
  }

  loginPerson() {
    console.log(this.loginForm);
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
    console.log(USER);
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
