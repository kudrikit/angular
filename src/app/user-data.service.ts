import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  private users: any[] = [];
  private usersSubject = new BehaviorSubject<any[]>([]);
  private currentUserSubject = new BehaviorSubject<any | null>(null);


  constructor() { }

  addUser(user: any) {
    this.users.push(user);
    this.usersSubject.next([...this.users]);
  }

  getUsers(): Observable<any[]> {
    return this.usersSubject.asObservable();
  }

  updateUser(updatedUser: any) {
    this.usersSubject.next(updatedUser);
  }

  setCurrentUser(user: any) {
    this.currentUserSubject.next(user);
  }

  getCurrentUser(): Observable<any | null> {
    return this.currentUserSubject.asObservable();
  }

  deleteUser(userIndex: number) {
    this.users.splice(userIndex, 1);
    this.usersSubject.next([...this.users]);
  }
}
