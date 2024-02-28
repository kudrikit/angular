import { Component, OnInit } from '@angular/core';
import { UserDataService } from '../user-data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {
  users: any[] = [];


  constructor(private userDataService: UserDataService,private router: Router) { }

  ngOnInit() {
    this.userDataService.getUsers().subscribe((users) => {
      this.users = users;
    });
  }
  addUser(user: any) {
    const isUserExist = this.users.some(existingUser => {
      return (
        existingUser.name === user.name &&
        existingUser.email === user.email &&
        existingUser.dob === user.dob &&
        existingUser.gender === user.gender
      );
    });

    if (!isUserExist) {
      this.users.push(user);
    }
  }
  editUser(user: any) {
    this.userDataService.setCurrentUser(user); // Установите текущего пользователя в сервисе
  }

  deleteUser(userId: number): void {
    this.userDataService.deleteUser(userId);
  }

}
