import { TestBed } from '@angular/core/testing';
import { SplitTextAnimationService } from './header-book-trip-animation.component';

describe('SplitTextAnimationService', () => {
  let service: SplitTextAnimationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SplitTextAnimationService],
    });
    service = TestBed.inject(SplitTextAnimationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('init', () => {
    let element: HTMLElement;

    beforeEach(() => {
      // สร้าง element จำลอง
      element = document.createElement('div');
      element.textContent = 'Test animation text';
      document.body.appendChild(element);
    });

    afterEach(() => {
      document.body.removeChild(element);
    });

    it('should set opacity of element to 1', () => {
      service.init(element);
      // gsap.set จะเปลี่ยน style opacity ของ element
      expect(element.style.opacity).toBe('1');
    });

    it('should create SplitText instance with correct properties', () => {
      const result = service.init(element);

      expect(result.splitTextInstance).toBeTruthy();
      expect(result.splitTextInstance.lines).toBeDefined();
      expect(result.splitAnimation).toBeDefined();
    });
  });

  describe('destroy', () => {
    it('should call kill on animation and revert on splitTextInstance', () => {
      const dummyKill = jasmine.createSpy('kill');
      const dummyRevert = jasmine.createSpy('revert');

      // แอบแปะ spy ให้ service property
      const dummyKillObj: Pick<gsap.core.Tween, 'kill'> = {
        kill: dummyKill,
      };

      // สร้าง dummy object ที่มี method revert() สำหรับ SplitText
      const dummyRevertObj: Pick<SplitText, 'revert'> = {
        revert: dummyRevert,
      };
      service.splitAnimation = dummyKillObj as gsap.core.Tween;
      service.splitTextInstance = dummyRevertObj as SplitText;

      service.destroy();

      expect(dummyKill).toHaveBeenCalled();
      expect(dummyRevert).toHaveBeenCalled();
    });

    it('should not throw if splitAnimation or splitTextInstance undefined', () => {
      service.splitAnimation = undefined;
      service.splitTextInstance = undefined as unknown as SplitText;

      expect(() => service.destroy()).not.toThrow();
    });
  });
});
