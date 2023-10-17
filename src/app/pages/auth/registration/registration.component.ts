import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { IUser } from '../../../models/users';
import { AuthService } from '../../../services/auth/auth.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css'],
})
export class RegistrationComponent implements OnInit {
  login: string;
  psw: string;
  pswRepeat: string;
  email: string;
  cardNumber: string;
  newUser: boolean;
  selectedValue: boolean;
  isUserSavedInStore: boolean = false;

  constructor(
    private messageService: MessageService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {}

  registration(ev: Event): void | boolean {
    if (this.psw !== this.pswRepeat) {
      this.messageService.add({
        severity: 'error',
        summary: 'Пароли не совпадают',
      });
      return false;
    }
    const userObj: IUser = {
      psw: this.psw,
      login: this.login,
      cardNumber: this.cardNumber,
      email: this.email,
    };
    if (!this.authService.isUserExist(userObj)) {
      this.authService.setUser(userObj);
      //
      if (this.isUserSavedInStore) {
        // Сохранение объекта пользователя в localStorage
        window.localStorage.setItem('user', JSON.stringify(userObj));
      }

      //

      this.messageService.add({
        severity: 'success',
        summary: 'Регистрация успешно пройдена',
      });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Пользователь уже зарегистрирован',
      });
    }
  }
  storeDetected() {
    if (this.selectedValue) {
    }
  }
}
