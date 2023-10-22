import {Component, OnDestroy, OnInit} from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  items:MenuItem[];
  time:Date;
  private timerInterval:number

  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
        label:'Билеты',
       routerLink: ["tickets-list"]
      },
      {
        label:'Выйти',
        routerLink: ["/auth"]
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
      this.time = new Date()
    }, 1000)

  }
  ngOnDestroy():void {
if (this.timerInterval){
  window.clearInterval(this.timerInterval);
}
  }

}
