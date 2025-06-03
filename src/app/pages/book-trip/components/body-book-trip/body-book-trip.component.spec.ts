import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyBookTripComponent } from './body-book-trip.component';

describe('BodyBookTripComponent', () => {
  let component: BodyBookTripComponent;
  let fixture: ComponentFixture<BodyBookTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyBookTripComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(BodyBookTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
