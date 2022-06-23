import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service';
import { Workers } from '../models/workers';
@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
})
export class AdminUserListComponent implements OnInit {
  listWorkers: Workers[] = [];
  Users!: Workers;
  valueSearch: string = '';
  constructor(private bduserService: BdUserService) { }

  ngOnInit(): void {
    this.getUser();
    this.obtainValueSearh();
  }
  getUser() {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker), console.log(worker);
    });
  }
  deleteUser(workers:Workers) {
    this.bduserService.deleteBdUserService(workers).subscribe(() =>{
      this.listWorkers = this.listWorkers.filter(workerUnDelete => workerUnDelete.id !== workers.id)
      console.log('El usuario fue eliminado');
    })
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
    })
    }
}

