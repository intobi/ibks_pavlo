import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { TicketForListPageDto } from './API/Models/ticketForListPageDto';

interface WeatherForecast {
  date: string;
  temperatureC: number;
  temperatureF: number;
  summary: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  public tickets: TicketForListPageDto[] = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
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

  title = 'TicketsManagement';
}
