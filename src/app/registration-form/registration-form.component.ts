import { Component,OnInit,Output, EventEmitter } from '@angular/core';
import { UserDataService } from '../user-data.service';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {
  name: string = '';
  email: string = '';
  password: string = '';
  dob:string='';
  gender:string='';

  @Output() userRegistered = new EventEmitter<any>();


  constructor(private userDataService: UserDataService) { }

  registerUser() {
    const user = {
      name: this.name,
      email: this.email,
      password: this.password,
      dob: this.dob,
      gender: this.gender
    };

    this.userDataService.addUser(user);

    this.name = '';
    this.email = '';
    this.password = '';
    this.dob = '';
    this.gender = '';

    this.userRegistered.emit(user);
  }

    ngOnInit() {
    }
  

}