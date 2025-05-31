import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThailandTourismComponent } from './thailand-tourism.component';

describe('ThailandTourismComponent', () => {
  let component: ThailandTourismComponent;
  let fixture: ComponentFixture<ThailandTourismComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ThailandTourismComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ThailandTourismComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
