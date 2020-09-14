import { AuthenticatedUser } from './../models/authenticated-user';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private user = new Subject<AuthenticatedUser>();

  constructor() { }


  setLoggedInuser(user: AuthenticatedUser): void {
    this.user.next(user);
  }

  getLoggedInUser(): Observable<AuthenticatedUser> {
    return this.user.asObservable();
  }

}
