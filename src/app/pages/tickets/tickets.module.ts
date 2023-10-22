import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageService } from 'primeng/api';
import { TicketsComponent } from './tickets.component';
import { MenubarModule } from 'primeng/menubar';
import { FooterComponent } from './footer/footer.component';
import { TicketListComponent } from './ticket-list/ticket-list.component';
import { AsideComponent } from './aside/aside.component';
import { HeaderComponent } from './header/header.component';
import { TicketsRoutingModule } from './tickets-routing.module';
import { DropdownModule } from 'primeng/dropdown';
import { FormsModule } from '@angular/forms';
import { BlocksStyleDirective } from '../../directive/blocks-style.directive';

@NgModule({
  declarations: [
    TicketsComponent,
    FooterComponent,
    TicketListComponent,
    HeaderComponent,
    AsideComponent,
    BlocksStyleDirective,
  ],
  imports: [
    CommonModule,
    MenubarModule,
    TicketsRoutingModule,
    DropdownModule,
    FormsModule,
  ],
  providers: [MessageService],
})
export class TicketsModule {}
