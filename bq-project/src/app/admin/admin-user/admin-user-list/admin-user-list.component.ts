import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../../../services/bd-user.service';
import { Workers } from '../../../models/workers';
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
  
  constructor(private bduserService: BdUserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getUser();
    this.obtainValueSearh();
  }
  //Obtain workers by bduserService
  getUser() {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker);
    },error => {console.log(error)});
  }
  //Delete user by bduserService
  deleteUser(workers:Workers) {
    this.bduserService.deleteBdUserService(workers).subscribe(() =>{
      this.listWorkers = this.listWorkers.filter(workerUnDelete => workerUnDelete.id !== workers.id)
      this.toastr.error('El usuario fue eliminado con éxito', 'Usuario Eliminado');
    },error => {console.log(error)})
  }
  // Update user by bduserService
  updateUser(workers: Workers) {
    this.Users = workers;
    this.bduserService.disparador.emit({
      dataUser: this.Users
    });
  }
  //Get search value from general filter and match them
  obtainValueSearh() {
   /*  this.bduserService.disparadorSearch.subscribe(data => {
      this.valueSearch = data.valueSearch;
    }); */
    }
    //Select the values ​​of the search options
  optionClick(option: string){
    this.optionAdmin = option;
    console.log('soy optionAdmin:', this.optionAdmin);
  }
}

