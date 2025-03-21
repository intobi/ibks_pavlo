import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { TicketsService } from '../../API/Services/tickets.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { TicketReplyDto } from '../../API/Models/ticketReplyDto';

@Component({
  selector: 'app-ticket-reply-form',
  standalone: false,
  templateUrl: './ticket-reply-form.component.html',
  styleUrl: './ticket-reply-form.component.scss',
})
export class TicketReplyFormComponent {
  ticketId: string = '';
  ticketReplyForm: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public ticketsService: TicketsService,
    private router: Router
  ) {}

  ngOnInit() {
    this.ticketId = this.route.snapshot.paramMap.get('id')!;
    this.updateForm();
  }

  updateForm() {
    this.ticketReplyForm = this.fb.group({
      replyText: ['', Validators.required],
    });
  }

  onSubmit(): void {
    let result = new TicketReplyDto();
    result.tickedId = this.ticketId;
    result.replyText = this.ticketReplyForm.get('replyText')?.value;

    this.ticketsService.createTicketReply(result).subscribe(() => {
      this.router.navigate(['/tickets']);
    });
  }
}
