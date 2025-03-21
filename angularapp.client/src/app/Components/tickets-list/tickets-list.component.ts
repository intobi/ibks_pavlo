import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TicketForListPageDto } from '../../API/Models/ticketForListPageDto';
import { TicketsService } from '../../API/Services/tickets.service';

@Component({
  selector: 'app-tickets-list',
  standalone: false,
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
})
export class TicketsListComponent {
  public tickets: TicketForListPageDto[] = [];

  constructor(
    private http: HttpClient,
    public ticketsService: TicketsService
  ) {}

  ngOnInit() {
    this.getAllTickets();
  }

  getAllTickets() {
    this.ticketsService.getAllTickets().subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
