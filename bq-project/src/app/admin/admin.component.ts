import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service';
import { Workers } from '../models/workers';
@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  listWorkers: Workers[] = [];

  constructor(private bduserService: BdUserService) {}
  ngOnInit(): void {
    this.bduserService.getBdUserService().subscribe(worker => {
      (this.listWorkers = worker), console.log(worker);
    });
  }

  // bdService() {
  //   this._bduserService.getBdUserService().subscribe(user =>
  //     {console.log(user);
  //     },
  //     error => {
  //       console.log(error);
  //   })
  // }
}
