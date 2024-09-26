import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/api/models';
import { UserService } from 'src/app/api/services';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})
export class UserListComponent implements OnInit {
  listUsers = [] as User[];
  constructor(private _userService: UserService) {}

  ngOnInit(): void {
    this._userService.apiUserListUserGet$Json$Response().subscribe((result) => {
      if (result.body.success == true) {
        this.listUsers = result.body.data;
      } else {

      }
    });
  }
}
