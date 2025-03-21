import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TicketForListPageDto } from '../Models/ticketForListPageDto';
import { EditCreateTicketDto } from '../Models/editCreateTicketDto';
import { TicketReplyDto } from '../Models/ticketReplyDto';
import { TicketReplieForListDto } from '../Models/ticketReplieForListDto';

const API = 'http://localhost:5126';

@Injectable({
  providedIn: 'root',
})
export class TicketsService {
  constructor(private http: HttpClient) {}

  getAllTickets() {
    return this.http.get<TicketForListPageDto[]>(`${API}/tickets`);
  }

  getTicketById(id: string) {
    return this.http.get<EditCreateTicketDto>(`${API}/tickets/${id}`);
  }

  updateTicket(ticket: EditCreateTicketDto) {
    return this.http.put(`${API}/tickets/${ticket.id}`, ticket);
  }

  createTicket(ticket: EditCreateTicketDto) {
    return this.http.post(`${API}/tickets`, ticket);
  }

  createTicketReply(ticketReplyDto: TicketReplyDto) {
    return this.http.post(
      `${API}/tickets/reply/${ticketReplyDto.tickedId}`,
      ticketReplyDto
    );
  }

  getAllTicketReplies(ticketId: string) {
    return this.http.get<TicketReplieForListDto[]>(
      `${API}/tickets/replies/${ticketId}`
    );
  }
}
