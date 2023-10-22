import { Component, OnInit } from '@angular/core';
import { TicketService } from '../../../services/tickets/ticket.service';
import { ITour } from '../../../models/tours';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsStorageService } from '../../../services/tiсkets-storage/tickets-storage.service';

@Component({
  selector: 'app-ticket-list',
  templateUrl: './ticket-list.component.html',
  styleUrls: ['./ticket-list.component.scss'],
})
export class TicketListComponent implements OnInit {
  tickets: ITour[];
  constructor(
    private ticketService: TicketService,
    private router: Router,
    private route: ActivatedRoute,
    private ticketStorage: TicketsStorageService
  ) {}

  ngOnInit(): void {
    this.ticketService.getTickets().subscribe((data) => {
      this.tickets = data;
      this.ticketStorage.setStorage(data);
    });
  }
  goToTicketInfoPage(item: ITour) {
    this.router.navigate([`/tickets/ticket/${item.id}`]);
  }
}