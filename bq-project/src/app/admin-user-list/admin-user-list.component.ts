import { Component, OnInit, Input } from '@angular/core';
import { Workers } from '../models/workers';
@Component({
  selector: 'app-admin-user-list',
  templateUrl: './admin-user-list.component.html',
  styleUrls: ['./admin-user-list.component.scss'],
})
export class AdminUserListComponent implements OnInit {
  @Input() workers!: Workers;
  constructor() {}

  ngOnInit(): void {}
}
