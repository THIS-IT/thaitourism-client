import { ElementRef } from '@angular/core';
import { CheckElementRefComponent } from './check-element-ref.unils';

describe('CheckElementRefComponent', () => {
  let util: CheckElementRefComponent;

  beforeEach(() => {
    util = new CheckElementRefComponent();
  });

  it('should create instance', () => {
    expect(util).toBeTruthy();
  });

  it('should return false if elementRef is null or undefined', () => {
    expect(util.isAvailable(null)).toBeFalse();
    expect(util.isAvailable(undefined)).toBeFalse();
  });

  it('should return false if nativeElement is null or undefined', () => {
    const fakeElementRef1 = { nativeElement: null } as ElementRef<any>;
    const fakeElementRef2 = { nativeElement: undefined } as ElementRef<any>;
    expect(util.isAvailable(fakeElementRef1)).toBeFalse();
    expect(util.isAvailable(fakeElementRef2)).toBeFalse();
  });

  it('should return true if nativeElement exists', () => {
    const fakeElementRef = { nativeElement: {} } as ElementRef<any>;
    expect(util.isAvailable(fakeElementRef)).toBeTrue();
  });
});
