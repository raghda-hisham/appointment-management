import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AcknowledgementPageComponent } from './acknowledgement-page.component';

describe('AcknowledgementPageComponent', () => {
  let component: AcknowledgementPageComponent;
  let fixture: ComponentFixture<AcknowledgementPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AcknowledgementPageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AcknowledgementPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
