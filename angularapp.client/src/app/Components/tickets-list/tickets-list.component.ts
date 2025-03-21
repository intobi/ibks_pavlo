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
    //this.getForecasts();
    this.getForecasts2();
  }

  getForecasts3() {
    this.http.get<any[]>('http://localhost:5126/api/tickets').subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }

  getForecasts2() {
    this.http.get<TicketForListPageDto[]>('tickets').subscribe(
      (result) => {
        this.tickets = result;
      },
      (error) => {
        console.error(error);
      }
    );
  }
}
