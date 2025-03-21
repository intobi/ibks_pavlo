import { EditCreateTicketDto } from '../../API/Models/editCreateTicketDto';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { TicketsService } from '../../API/Services/tickets.service';
import {
  INSTALL_ENVIRONMENT,
  PRIORITIES,
  STATUSES,
  TYPES,
} from '../../API/Consts/ticketConsts';

@Component({
  selector: 'app-ticket-form',
  standalone: false,
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.scss',
})
export class TicketFormComponent {
  public statuses = STATUSES;
  public types = TYPES;
  public priorities = PRIORITIES;
  public environments = INSTALL_ENVIRONMENT;

  editMode: boolean = false;
  ticketData: EditCreateTicketDto = new EditCreateTicketDto();
  ticketForm: any;
  ticketId: string = '';
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    public ticketsService: TicketsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.ticketId = this.route.snapshot.paramMap.get('id')!;
    this.updateForm();
    if (this.ticketId == 'new') {
      this.ticketData = new EditCreateTicketDto();
    } else {
      this.ticketsService.getTicketById(this.ticketId).subscribe((data) => {
        this.ticketData = data;
        this.updateForm();
        this.editMode = true;
        this.ticketForm.get('title')?.disable();
      });
    }
  }

  updateForm() {
    this.ticketForm = this.fb.group({
      title: [this.ticketData.title, Validators.required],
      allReplies: [this.ticketData.allReplies],
      status: [this.ticketData.status, Validators.required],
      type: [this.ticketData.type, Validators.required],
      module: [this.ticketData.module],
      urgentLvl: [this.ticketData.urgentLvl, Validators.required],
      description: [this.ticketData.description, Validators.required],
      installedEnvironment: [
        this.ticketData.installedEnvironment,
        Validators.required,
      ],
    });
  }

  onSubmit(): void {
    if (this.ticketForm.valid) {
      this.ticketData.title = this.ticketForm.get('title')?.value;
      this.ticketData.allReplies = this.ticketForm.get('allReplies')?.value;
      this.ticketData.status = this.ticketForm.get('status')?.value;
      this.ticketData.type = this.ticketForm.get('type')?.value;
      this.ticketData.module = this.ticketForm.get('module')?.value;
      this.ticketData.urgentLvl = this.ticketForm.get('urgentLvl')?.value;
      this.ticketData.description = this.ticketForm.get('description')?.value;
      this.ticketData.installedEnvironment = this.ticketForm.get(
        'installedEnvironment'
      )?.value;

      if (this.editMode) {
        this.ticketsService.updateTicket(this.ticketData).subscribe(() => {
          this.router.navigate(['/tickets']);
        });
      } else {
        this.ticketsService.createTicket(this.ticketData).subscribe(() => {
          this.router.navigate(['/tickets']);
        });
      }
    }
  }
}
