import { ElementRef } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckElementRefComponent } from '../../../../shared/utils/check-element-ref/check-element-ref.unils';
import { ValidationDataUnils } from '../../../../shared/utils/validation-data/validation-data.unils';
import { Airport } from '../body-book-trip/models/airport-seletor/airport-selector-th.model';
import { BookTripMapComponent } from './book-trip-map.component';

describe('BookTripMapComponent', () => {
  let component: BookTripMapComponent;
  let fixture: ComponentFixture<BookTripMapComponent>;

  // Mock utils
  const mockValidationUtils = {
    isNotNil: (val: any) => val !== null && val !== undefined,
    allNotNil: (...args: any[]) =>
      args.every((val) => val !== null && val !== undefined),
  };

  const mockCheckElementRef = {
    isAvailable: (ref: ElementRef | undefined) => !!ref,
  };

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BookTripMapComponent],
      providers: [
        { provide: ValidationDataUnils, useValue: mockValidationUtils },
        { provide: CheckElementRefComponent, useValue: mockCheckElementRef },
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(BookTripMapComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('getAirportLatLng()', () => {
    it('should return lat/lng when valid airport given', () => {
      const airport: Airport = { lat: 13.7563, long: 100.5018 } as Airport;
      const result = component.getAirportLatLng(airport);
      expect(result).toEqual({ lat: 13.7563, lng: 100.5018 });
    });

    it('should return null if airport is null', () => {
      expect(component.getAirportLatLng(null)).toBeNull();
    });

    it('should return null if lat or long is null', () => {
      const airport: Airport = { lat: null, long: 100 } as any;
      expect(component.getAirportLatLng(airport)).toBeNull();
    });
  });

  describe('getCenter()', () => {
    it('should calculate center point correctly', () => {
      const origin = { lat: 10, lng: 20 };
      const destination = { lat: 30, lng: 40 };
      const center = component.getCenter(origin, destination);
      expect(center).toEqual({ lat: 20, lng: 30 });
    });
  });

  describe('createColoredPin()', () => {
    it('should return base64 image with given color', () => {
      const color = '#ff0000';
      const result = component.createColoredPin(color);
      expect(result.startsWith('data:image/svg+xml;base64,')).toBeTrue();
    });
  });

  describe('ngOnChanges()', () => {
    it('should NOT create map if airport data is missing', () => {
      component.airportSelectorTH = null;
      component.airportSelectorUSA = { lat: 37, long: -122 } as Airport;
      component.ngOnChanges();
      expect((component as any).map).toBeUndefined();
    });

    it('should create map if both airport selectors are valid and elementRef is available', () => {
      const div = document.createElement('div');
      component.mapElementRef = new ElementRef(div);
      component.airportSelectorTH = { lat: 13, long: 100 } as Airport;
      component.airportSelectorUSA = { lat: 37, long: -122 } as Airport;
      component.ngOnChanges();
      expect((component as any).map).toBeDefined();
    });

    it('should remove existing map before creating new one', () => {
      const div = document.createElement('div');
      component.mapElementRef = new ElementRef(div);
      component.airportSelectorTH = { lat: 13, long: 100 } as Airport;
      component.airportSelectorUSA = { lat: 37, long: -122 } as Airport;
      component.ngOnChanges();
      const originalMap = (component as any).map;
      const removeSpy = spyOn(originalMap, 'remove').and.callThrough();
      component.ngOnChanges();
      expect(removeSpy).toHaveBeenCalled();
    });
  });
});
