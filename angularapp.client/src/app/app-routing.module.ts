import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TicketFormComponent } from './Components/ticket-form/ticket-form.component'; // Перевірте шлях до компонента
import { TicketsListComponent } from './Components/tickets-list/tickets-list.component';

const routes: Routes = [
  { path: 'tickets/:id', component: TicketFormComponent },
  { path: 'tickets/new', component: TicketFormComponent },
  { path: 'tickets', component: TicketsListComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
