import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketReplyFormComponent } from './ticket-reply-form.component';

describe('TicketReplayFormComponent', () => {
  let component: TicketReplyFormComponent;
  let fixture: ComponentFixture<TicketReplyFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketReplyFormComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketReplyFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
