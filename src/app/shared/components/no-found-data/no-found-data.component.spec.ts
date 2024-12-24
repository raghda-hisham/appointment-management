import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFoundDataComponent } from './no-found-data.component';

describe('NoFoundDataComponent', () => {
  let component: NoFoundDataComponent;
  let fixture: ComponentFixture<NoFoundDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFoundDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NoFoundDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
