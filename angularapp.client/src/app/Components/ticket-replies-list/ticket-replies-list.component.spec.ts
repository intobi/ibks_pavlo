import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketRepliesListComponent } from './ticket-replies-list.component';

describe('TicketRepliesListComponent', () => {
  let component: TicketRepliesListComponent;
  let fixture: ComponentFixture<TicketRepliesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TicketRepliesListComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketRepliesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
