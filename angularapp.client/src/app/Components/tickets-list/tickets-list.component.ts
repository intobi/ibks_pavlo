import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TicketForListPageDto } from '../../API/Models/ticketForListPageDto';

@Component({
  selector: 'app-tickets-list',
  standalone: false,
  templateUrl: './tickets-list.component.html',
  styleUrl: './tickets-list.component.scss',
})
export class TicketsListComponent {
  public tickets: TicketForListPageDto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getForecasts();
  }

  getForecasts() {
    this.http.get<TicketForListPageDto[]>('/weatherforecast').subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
