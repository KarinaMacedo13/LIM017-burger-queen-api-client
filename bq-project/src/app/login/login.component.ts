import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Workers } from '../models/workers';
import { BdUserService } from '../services/bd-user.service';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  messageError: any;
  accesToken: any;
  constructor(private fb: FormBuilder,private toastr: ToastrService, private bduserService: BdUserService, private router: Router, private cookieService: CookieService) {
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
    class user {
      email: string;
      password: string;
      constructor(email: string, password: string) {
        this.email = email;
        this.password = password;
      }
    }
    const USER: user = {
      email: this.loginForm.get('email')?.value,
      password: this.loginForm.get('password')?.value,
    };
    console.log('soy user', USER);
    this.bduserService.loginUsers(USER)
    .subscribe({
      next: res => {
      console.log('recibiendo respuesta', res)
      console.log('Recibo acces token', res.accessToken)
      this.accesToken = res.accessToken;
        this.bduserService.getToken(res)
        this.bduserService.getOneUser(res).subscribe(res=>{
          console.log('ENCUENTRAME', res);
          localStorage.setItem('id', res.id);
          localStorage.setItem('email', res.email);
          switch(res.roles.description) {
            case 'admin':
              this.cookieService.set('roles_access', res.roles.description, 1, '/'),
              // this.cookieService.set('token_access', this.accesToken, 1, '/')
              this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen'),
              this.router.navigate(['/admin/user'])
              break
            case 'weiter':
              this.cookieService.set('roles_access', res.roles.description, 1, '/' ),
              // this.cookieService.set('token_access', this.accesToken, 1, '/home' && 'home/orders' && 'home/menu')
              this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen'),
              this.router.navigate(['/home/menu'])
              break
            case 'chef':
              this.cookieService.set('roles_access', res.roles.description, 1, '/' ),
              // this.cookieService.set('token_access', this.accesToken, 1, '/chef' && '/login')
              this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen'),
              this.router.navigate(['/chef'])
              break
          }
        })
      },
      error: error => {
        // mostrar error igualando propiedad:
        this.toastr.error('Acceso denegado', 'Solicita los permisos a BurgerQueen'),
        this.loginForm.reset();
        this.messageError = error.status;
      },
    });
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
