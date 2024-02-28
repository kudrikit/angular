// user-profile.component.ts

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserDataService } from '../user-data.service'; // Импортируйте UserService

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  user: any;
  isEditing: boolean = false;

  constructor (private userDataService: UserDataService) { }

  ngOnInit() {
    this.userDataService.getCurrentUser().subscribe(user => {
      this.user = user; 
    });
    }

  ShowUser() {
    this.isEditing = true;
  }
  HideUser() {
    this.isEditing = false;
  }

  saveUser() {
    this.userDataService.updateUser(this.user);
    this.isEditing = false;
  }
}
