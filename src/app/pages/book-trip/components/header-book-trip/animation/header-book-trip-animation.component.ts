import { Injectable } from '@angular/core';
import gsap from 'gsap';
import SplitText from 'gsap/SplitText';

type Tween = gsap.core.Tween;
@Injectable({ providedIn: 'root' })
export class SplitTextAnimationService {
  splitTextInstance!: SplitText;
  splitAnimation?: Tween;

  init(splitTextElement: HTMLElement): {
    splitTextInstance: SplitText;
    splitAnimation?: Tween;
  } {
    // เซ็ต opacity ของข้อความให้เป็น 1 ก่อน split เพื่อไม่ให้เห็นข้อความกระพริบ
    gsap.set(splitTextElement, { opacity: 1 });

    // สร้าง SplitText instance
    this.splitTextInstance = new SplitText(splitTextElement, {
      type: 'words,lines',
      linesClass: 'line',
      autoSplit: true,
    });

    // สร้าง animation ถ้ามี lines
    if (this.splitTextInstance.lines) {
      this.splitAnimation = gsap.from(this.splitTextInstance.lines, {
        duration: 1.5,
        yPercent: 300,
        opacity: 0,
        stagger: 0.1,
        ease: 'expo.out',
      });
    }

    return {
      splitTextInstance: this.splitTextInstance,
      splitAnimation: this.splitAnimation,
    };
  }

  // เพิ่ม method สำหรับ clean-up ได้ถ้าต้องการใช้
  destroy(): void {
    this.splitAnimation?.kill();
    this.splitTextInstance?.revert();
  }
}
