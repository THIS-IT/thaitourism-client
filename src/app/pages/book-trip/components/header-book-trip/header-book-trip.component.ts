import {
  AfterViewInit,
  Component,
  ElementRef,
  inject,
  OnDestroy,
  ViewChild,
} from '@angular/core';
import { gsap } from 'gsap';
import { SplitText } from 'gsap/all';

import { SplitTextAnimationService } from '../../../../shared/utils/animation/split-text-animation.component';
import { CheckElementRefComponent } from '../../../../shared/utils/check-element-ref/check-element-ref.unils';
gsap.registerPlugin(SplitText);
@Component({
  selector: 'app-header-book-trip',
  imports: [],
  standalone: true,
  templateUrl: './header-book-trip.component.html',
  styleUrls: ['./header-book-trip.component.scss'],
})
export class HeaderBookTripComponent implements AfterViewInit, OnDestroy {
  @ViewChild('splitTextElement') splitTextElement: ElementRef | null = null;

  private animationService = inject(SplitTextAnimationService);
  private checkElementRefComponent = inject(CheckElementRefComponent);

  ngAfterViewInit(): void {
    // ต้องรอให้ Font โหลดเสร็จก่อนค่อยเริ่ม SplitText และ Animation
    // ไม่งั้นตำแหน่งการ split อาจจะเพี้ยน ถ้า font ยังไม่โหลด
    document.fonts.ready.then(() => {
      if (this.checkElementRefComponent.isAvailable(this.splitTextElement)) {
        this.animationService.init(this.splitTextElement.nativeElement);
      }
    });
  }

  ngOnDestroy(): void {
    this.animationService.destroy();
  }
}
