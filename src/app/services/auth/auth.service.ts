import { Injectable } from '@angular/core';
import { IUser } from '../../models/users';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usersStorage: IUser[] = [];

  constructor() {}

  checkUser(user: IUser): boolean {
    const isUserExist = this.usersStorage.find(
      (element) => element.login === user.login
    );
    let isUserSavedInStore = window.localStorage.getItem('user_' + user?.login);
    let userInStore: IUser = <IUser>{};
    if (isUserSavedInStore) {
      userInStore = JSON.parse(isUserSavedInStore);
    }

    if (isUserExist) {
      return isUserExist.psw === user.psw;
    } else if (userInStore?.login) {
      return userInStore.psw === user.psw;
    }
    return false;
  }

  /*  checkUser(user: IUser): string {
    const usersString = window.localStorage.getItem('users');
    if (usersString) {
      const users: IUser[] = JSON.parse(usersString) as IUser[];
      // Поиск пользователя по логину
      const foundUser = users.find((u) => u.login === user.login);
      if (foundUser) {
        if (foundUser.psw === user.psw) {
          return 'success'; // Успешная авторизация
        } else {
          return 'incorrectPassword'; // Некорректный пароль
        }
      } else {
        return 'incorrectLogin'; // Некорректный логин
      }
    }
    return 'notFound'; // Пользователь не найден
  }*/

  setUser(user: IUser): void {
    const isUserExist = this.usersStorage.find(
      (element) => element.login === user.login
    );
    if (!isUserExist && user?.login) {
      this.usersStorage.push(user);
    }
  }

  isUserExist(user: IUser): boolean {
    const isUserExist = this.usersStorage.find(
      (element) => element.login === user.login
    );
    return !!isUserExist;
  }
  getUserFromLocalStorage(): IUser | null {
    const userString = window.localStorage.getItem('user');
    if (userString) {
      return JSON.parse(userString) as IUser;
    }
    return null;
  }
}
