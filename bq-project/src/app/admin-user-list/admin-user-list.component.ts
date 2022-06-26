import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service';
import { Workers } from '../models/workers';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
})
export class AdminUserListComponent implements OnInit {
  listWorkers: Workers[] = [];
  Users!: Workers;
  valueSearch: string = '';
  optionAdmin !: any;
  boolValue!:boolean;
  constructor(private bduserService: BdUserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUser();
    this.obtainValueSearh();
  }
  getUser() {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker), console.log(worker);
    },error => {console.log(error)});
  }
  deleteUser(workers:Workers) {
    this.bduserService.deleteBdUserService(workers).subscribe(() =>{
      this.listWorkers = this.listWorkers.filter(workerUnDelete => workerUnDelete.id !== workers.id)
      this.toastr.error('El usuario fue eliminado con éxito', 'Usuario Eliminado');
      console.log('El usuario fue eliminado');
    },error => {console.log(error)})
  }
  updateUser(workers: Workers) {
    this.Users = workers;
    console.log(this.Users)
    this.bduserService.disparador.emit({
      dataUser: this.Users
    });
  }
  obtainValueSearh() {
    this.bduserService.disparadorSearch.subscribe(data => {
      // console.log('asdasdasdasdsadasdasdasdasd', data)
      // console.log(data.valueSearch)
      this.valueSearch = data.valueSearch;
    });
    }
  optionClick(option:any){
    this.optionAdmin = option;
    console.log(typeof this.optionAdmin);
    console.log(this.optionAdmin);
    this.boolValue = JSON.parse(this.optionAdmin);
    console.log(typeof this.boolValue);
    console.log(this.boolValue);
  }
}

