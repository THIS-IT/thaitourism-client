import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { carouselImagesByProvince } from './data/carousel-image.constant';
import { CarouselImageModel } from './models/carousel-image.model';

@Component({
  selector: 'app-carousel-image',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './carousel-image.component.html',
  styleUrls: ['./carousel-image.component.scss'],
})
export class CarouselImageComponent {
  @Input() province: string | null = null;
  carouselImage = new CarouselImageModel(carouselImagesByProvince);
}
