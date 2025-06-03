import { ComponentFixture, TestBed } from '@angular/core/testing';
import * as animationModule from '../../../../shared/utils/animation/split-text-animation.component';

import { HeaderBookTripComponent } from './header-book-trip.component';
describe('HeaderBookTripComponent', () => {
  let component: HeaderBookTripComponent;
  let fixture: ComponentFixture<HeaderBookTripComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HeaderBookTripComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(HeaderBookTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngAfterViewInit', () => {
    const mockFonts = {
      ready: Promise.resolve(),
    } as unknown as FontFaceSet;

    it('should initialize split text animation after view init', (done) => {
      spyOnProperty(document, 'fonts', 'get').and.returnValue(mockFonts);
      const initSpy = spyOn(
        animationModule.SplitTextAnimationService.prototype,
        'init',
      ).and.callThrough();
      component.ngAfterViewInit();
      document.fonts.ready.then(() => {
        expect(initSpy).toHaveBeenCalled();
        done(); // บอก Jest/Jasmine ว่า test จบแล้ว
      });
    });
  });

  describe('ngOnDestroy', () => {
    it('should call destroy on animation service', () => {
      const destroySpy = spyOn(
        animationModule.SplitTextAnimationService.prototype,
        'destroy',
      ).and.callThrough();
      component.ngOnDestroy();
      expect(destroySpy).toHaveBeenCalled();
    });
  });
});
