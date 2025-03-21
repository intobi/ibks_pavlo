import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from './Components/ticket-form/ticket-form.component';
import { TicketsListComponent } from './Components/tickets-list/tickets-list.component';
import { TicketReplyFormComponent } from './Components/ticket-replay-form/ticket-reply-form.component';
import { TicketRepliesListComponent } from './Components/ticket-replies-list/ticket-replies-list.component';

const routes: Routes = [
  { path: 'tickets/:id', component: TicketFormComponent },
  { path: 'tickets/new', component: TicketFormComponent },
  { path: 'tickets', component: TicketsListComponent },
  { path: 'tickets/reply/:id', component: TicketReplyFormComponent },
  { path: 'tickets/replies/:id', component: TicketRepliesListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
