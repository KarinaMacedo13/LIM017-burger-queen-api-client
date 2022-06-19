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
  constructor(private bduserService: BdUserService) {}

  ngOnInit(): void {
    this.getUser();
  }
  getUser() {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker), console.log(worker);
    });
  }
  deleteUser(workers: Workers) {
    this.bduserService.deleteBdUserService(workers).subscribe(() => {
      this.listWorkers = this.listWorkers.filter(
        workerUnDelete => workerUnDelete.id !== workers.id
      );
      console.log('El usuario fue eliminado');
    });
  }
}
