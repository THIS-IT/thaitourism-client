import { ElementRef, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CheckElementRefComponent {
  isAvailable<T>(
    elRef: ElementRef<T> | null | undefined,
  ): elRef is ElementRef<T> {
    // ถ้า elRef เป็น null หรือ undefined => จะ return false
    // ถ้า elRef.nativeElement ไม่มี => return false
    // ถ้ามีจริง => return true
    const hasRef = elRef !== null && elRef !== undefined;
    const hasElement =
      hasRef &&
      elRef.nativeElement !== null &&
      elRef.nativeElement !== undefined;
    return hasElement;
  }
}
