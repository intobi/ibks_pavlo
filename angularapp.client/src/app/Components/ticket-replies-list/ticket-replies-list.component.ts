import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../API/Services/tickets.service';
import { TicketReplieForListDto } from '../../API/Models/ticketReplieForListDto';

@Component({
  selector: 'app-ticket-replies-list',
  standalone: false,
  templateUrl: './ticket-replies-list.component.html',
  styleUrl: './ticket-replies-list.component.scss',
})
export class TicketRepliesListComponent {
  ticketId: string = '';
  public ticketReplies: TicketReplieForListDto[] = [];

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public ticketsService: TicketsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id')!;
    this.updateList();
  }

  updateList() {
    this.ticketsService.getAllTicketReplies(this.ticketId).subscribe((data) => {
      this.ticketReplies = data;
    });
  }
}
