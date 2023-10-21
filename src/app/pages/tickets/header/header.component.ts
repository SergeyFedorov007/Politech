import { Component, OnInit } from '@angular/core';
import {MenuItem} from "primeng/api";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  items:MenuItem[]

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
    ]
  }

}
