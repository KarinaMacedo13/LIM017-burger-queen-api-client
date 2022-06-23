import { Component, OnInit } from '@angular/core';
import { BdUserService } from '../services/bd-user.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss'],
})
export class AdminComponent implements OnInit {
  workers: Worker[] = [];
  searchValue: string = '';
  constructor(private bduserService: BdUserService) {}
  ngOnInit(): void {
  }
  searchInput(search: string) {
    this.searchValue = search;
    // console.log(this.searchValue);
    this.bduserService.disparadorSearch.emit({
      valueSearch: this.searchValue,
    });
  }
}
