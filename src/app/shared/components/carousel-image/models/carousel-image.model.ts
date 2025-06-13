import { CarouselItem } from '../data/carousel-image.constant';

export class CarouselImageModel {
  constructor(public data: CarouselItem[]) {}

  getDataByProvince(provinceName: string): CarouselItem | null {
    return this.data.find((item) => item.province === provinceName) || null;
  }
}
