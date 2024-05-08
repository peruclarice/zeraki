import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JoinTheWaitlistComponent } from './join-the-waitlist.component';

describe('JoinTheWaitlistComponent', () => {
  let component: JoinTheWaitlistComponent;
  let fixture: ComponentFixture<JoinTheWaitlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JoinTheWaitlistComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JoinTheWaitlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
