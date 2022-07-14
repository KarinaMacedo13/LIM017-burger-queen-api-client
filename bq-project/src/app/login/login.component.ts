import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
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
  roles: any;
  constructor(private fb: FormBuilder,private toastr: ToastrService, private bduserService: BdUserService, private router: Router, private cookieService: CookieService) {
    this.loginForm = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
    });
  }
  ngOnInit(): void {
  }
  loginPerson() {
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
    this.bduserService.loginUsers(USER)
    .subscribe({
      next: res => {
      this.accesToken = res.accessToken;
        this.bduserService.getToken(res)
        this.bduserService.getOneUser(res).subscribe(res=>{
          console.log('Es el usuario',res);
          localStorage.setItem('id', res.id);
          localStorage.setItem('email', res.email);
          this.roles = res.roles.description;
          localStorage.setItem('description', this.roles);
          switch(res.roles.description) {
            case 'admin':
              this.cookieService.set('roles_access', res.roles.description, 1, '/'),
              this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen'),
              this.router.navigate(['/admin/user'])
              break
            case 'weiter':
              this.cookieService.set('roles_access', res.roles.description, 1, '/' ),
              this.toastr.success('Te has logeado con exito', 'Bienvenido a BurgerQueen'),
              this.router.navigate(['/home/menu'])
              break
            case 'chef':
              this.cookieService.set('roles_access', res.roles.description, 1, '/' ),
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
}
