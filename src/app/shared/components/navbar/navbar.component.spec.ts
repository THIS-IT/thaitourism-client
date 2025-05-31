import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarComponent } from './navbar.component';

describe('NavbarComponent', () => {
  let component: NavbarComponent;
  let fixture: ComponentFixture<NavbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NavbarComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('selectLanguage', () => {
    it('should log selected language', () => {
      const consoleSpy = spyOn(console, 'log');
      const language = 'en';
      component.selectLanguage(language);
      expect(consoleSpy).toHaveBeenCalledWith('เลือกภาษา:', language);
    });
  });

  describe('changePage', () => {
    beforeEach(() => {
      component.isPage = 'thailandTourism';
    });
    it('should log changePage', () => {
      const consoleSpy = spyOn(console, 'log');
      const page = 'travelPackages';
      component.changePage(page);
      expect(consoleSpy).toHaveBeenCalledWith('เปลี่ยนหน้าไป:', page);
    });
  });
});
