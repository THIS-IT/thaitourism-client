import { carouselImagesByProvince } from '../data/carousel-image.constant';
import { CarouselImageModel } from './carousel-image.model';

describe('carouselImageModel', () => {
  let carouselImage: CarouselImageModel;
  beforeEach(() => {
    carouselImage = new CarouselImageModel(carouselImagesByProvince);
  });

  it('should initialize with data', () => {
    expect(carouselImage.data.length).toBeGreaterThan(0);
  });

  it('should return data for a valid province', () => {
    const result = carouselImage.getDataByProvince('Yala');
    expect(result).toBeDefined();
    expect(result?.province).toBe('Yala');
  });

  it('should return data for a null province', () => {
    const result = carouselImage.getDataByProvince('Yala2');
    expect(result).toBeDefined();
    expect(result).toBeNull();
  });
});
