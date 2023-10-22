import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../services/auth/auth.service';
import { IUser } from '../../../models/users';
import { MessageService } from 'primeng/api';
import { ActivatedRoute, Router } from '@angular/router';
import {UserService} from "../../../services/user/user.service";

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.scss'],
})
export class AuthorizationComponent implements OnInit {
  loginText = 'Login';
  pswText = 'Password';
  psw: string;
  login: string;
  selectedValue: boolean;
  cardNumber: string;
  authTextButton: string;
  constructor(
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
    private userService: UserService
    // private route: ActivatedRoute
  ) {} // dependency injection

  ngOnInit(): void {
    this.authTextButton = 'Авторизоваться';
  }

  vipStatusDelected() {
    if (this.selectedValue) {
    }
  }

  // Проверка на корректность ввода логина и пароля

  //   onAuth(ev: Event): void {
  //   const authUser: IUser = {
  //     psw: this.psw,
  //     login: this.login,
  //   };
  //
  //   const authStatus = this.authService.checkUser(authUser);
  //   let statusText = '';
  //   switch (authStatus) {
  //     case 'success':
  //       statusText = 'Авторизация успешно пройдена'
  //       break;
  //     case 'incorrectPassword':
  //       this.messageService.add({
  //         severity: 'warn',
  //         summary: 'Пароль не верный',
  //       });
  //       break;
  //     case 'incorrectLogin':
  //       this.messageService.add({
  //         severity: 'warn',
  //         summary: 'Логин не верный',
  //       });
  //       break;
  //     case 'notFound':
  //       this.messageService.add({
  //         severity: 'warn',
  //         summary: 'Пользователь не найден',
  //       });
  //       break;
  //     default:
  //       this.messageService.add({
  //         severity: 'warn',
  //         summary: 'Что-то пошло не так',
  //       });
  //   }
  //   });
  //
  //     this.messageService.add({
  //       severity: 'warn',
  //       summary: statusText
  //       ,
  //     });
  // }

  onAuth(ev: Event): void {
    const authUser: IUser = {
      psw: this.psw,
      login: this.login,
    };
    if (this.authService.checkUser(authUser)) {
      this.router.navigate(['tickets/tickets-list']);
      this.userService.setUser(authUser)
      // this.messageService.add({
      //   severity: 'success',
      //   summary: 'Авторизация успешно пройдена',
      // });
    } else {
      this.messageService.add({
        severity: 'warn',
        summary: 'Логин или пароль не верный',
      });
    }
  }
}
