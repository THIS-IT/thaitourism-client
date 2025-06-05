import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ValidationDataUnils {
  // เช็คว่า value ไม่เป็น null หรือ undefined
  isNotNil<T>(value: T | null | undefined): value is T {
    return value !== null && value !== undefined;
  }

  // เช็คว่า ทุกค่าที่ส่งเข้ามา (args) ไม่เป็น null หรือ undefined เลย
  // เช่น ส่ง object เข้ามาหลาย ค่า ในน object ต้องไม่เป็น null หรือ undefined เลย สักตัว
  allNotNil<T>(...args: (T | null | undefined)[]): boolean {
    return args.every((value) => value !== null && value !== undefined);
  }
  //  หาข้อมูลใน array ที่ไม่เป็น null หรือ undefined
  filterNotNil<T>(array: (T | null | undefined)[]): T[] {
    return array.filter(
      (item): item is T => item !== null && item !== undefined,
    );
  }
}
