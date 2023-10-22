import { Injectable } from '@angular/core';
import {IUser} from "../../models/users";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  private user: IUser;
  getUser(): IUser {
    return this.user
  };
  setUser(user: IUser) {
    return this.user = user
  };

}
