import { EditCreateTicketDto } from '../../API/Models/editCreateTicketDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: false,
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent {
  ticketData: EditCreateTicketDto = {
    id: '123',
    title: 'Test',
    allReplies: [],
    status: 'Open',
    type: 'Feature',
    module: 'Auth',
    urgentLvl: 'High',
    description: 'test123.',
  };

  ticketForm: any;
  ticketId: string | null = null;
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.ticketId = this.route.snapshot.paramMap.get('id');

    if (this.ticketId == 'new') {
      this.ticketData = new EditCreateTicketDto();
    } else {
    }

    this.ticketForm = this.fb.group({
      title: [this.ticketData.title, Validators.required],
      allReplies: [this.ticketData.allReplies],
      status: [this.ticketData.status, Validators.required],
      type: [this.ticketData.type, Validators.required],
      module: [this.ticketData.module],
      urgentLvl: [this.ticketData.urgentLvl, Validators.required],
      description: [this.ticketData.description, Validators.required],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      const updatedTicket: EditCreateTicketDto = {
        ...this.ticketData,
        ...this.ticketForm.value,
      };
      console.log('Оновлені дані тікета:', updatedTicket);
      // Тут можна викликати сервіс для оновлення даних на сервері
    }
  }
}
