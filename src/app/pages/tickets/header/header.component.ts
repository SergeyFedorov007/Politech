import {
  Component,
  Input,
  OnDestroy,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { MenuItem } from 'primeng/api';
import { UserService } from '../../../services/user/user.service';
import { IUser } from '../../../models/users';
import { IMenuType } from '../../../models/menuType';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {
  items: MenuItem[];
  time: Date;
  user: IUser;
  @Input()
  menuType: IMenuType;
  private timerInterval: number;
  private settingsActive = false;

  constructor(private userService: UserService) {}
  initMenuItems(): MenuItem[] {
    return [
      {
        label: 'Билеты',
        routerLink: ['tickets-list'],
      },
      {
        label: 'Настройки',
        routerLink: ['/settings'],
        visible: this.settingsActive,
      },
      {
        label: 'Выйти',
        routerLink: ['/auth'],
      },
    ];
  }

  ngOnInit(): void {
    this.user = this.userService.getUser();

    this.items = [
      {
        label: 'Билеты',
        routerLink: ['tickets-list'],
      },
      {
        label: 'Выйти',
        routerLink: ['/auth'],
      },
      // {
      //   label:'Edit',
      //   icon:'pi pi-fw pi-pencil',
      //   items: [
      //     {label: 'Delete', icon: 'pi pi-fw pi-trash'},
      //     {label: 'Refresh', icon: 'pi pi-fw pi-refresh'}
      //   ]
      //
      // }
    ];
    this.timerInterval = window.setInterval(() => {
      this.time = new Date();
    }, 1000);
  }
  ngOnDestroy(): void {
    if (this.timerInterval) {
      window.clearInterval(this.timerInterval);
    }
  }
  ngOnChanges(ev: SimpleChanges): void {
    this.settingsActive = this.menuType?.type === 'extended';
    this.items = this.initMenuItems();
  }
}
