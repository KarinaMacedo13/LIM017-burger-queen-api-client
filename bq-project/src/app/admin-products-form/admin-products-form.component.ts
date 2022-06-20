import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-products-form',
  templateUrl: './admin-products-form.component.html',
  styleUrls: ['./admin-products-form.component.scss'],
})
export class AdminProductsFormComponent implements OnInit {
  genero !: boolean;
  constructor() {}

  ngOnInit(): void {}
  form = new FormGroup({
    gender: new FormControl('', Validators.required)
  });
   
  get f(){
    return this.form.controls;
  }
   
  submit(){
    console.log(this.form.value);
   if(this.form.get("gender")?.value === 'male'){
   this.genero=true;
   }
   else{ this.genero = false; }
   console.log(this.genero);
  }
   
}
