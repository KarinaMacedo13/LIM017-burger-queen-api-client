import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {
  constructor(private _bduserService: BdUserService) {}
  ngOnInit(): void {
    this.bdService();
  }

  bdService() {
    this._bduserService.getBdUserService().subscribe(user => 
      {console.log(user);},
      error => {
        console.log(error);
    })
  }  
}
