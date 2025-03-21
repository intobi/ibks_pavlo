import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TicketFormComponent } from './Components/ticket-form/ticket-form.component';
import { TicketsListComponent } from './Components/tickets-list/tickets-list.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TicketReplyFormComponent } from './Components/ticket-replay-form/ticket-reply-form.component';
import { TicketRepliesListComponent } from './Components/ticket-replies-list/ticket-replies-list.component';

@NgModule({
  declarations: [AppComponent, TicketFormComponent, TicketsListComponent, TicketReplyFormComponent, TicketRepliesListComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
