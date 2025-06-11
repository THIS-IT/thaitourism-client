import { TestBed } from '@angular/core/testing';
import { ValidationDataUtils } from './validation-data.utils';

describe('ValidationDataUnils', () => {
  let service: ValidationDataUtils;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ValidationDataUtils],
    });
    service = TestBed.inject(ValidationDataUtils);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('isNotNil', () => {
    it('should return true for non-null/undefined values', () => {
      expect(service.isNotNil(123)).toBeTrue();
      expect(service.isNotNil('hello')).toBeTrue();
      expect(service.isNotNil(false)).toBeTrue();
    });

    it('should return false for null or undefined', () => {
      expect(service.isNotNil(null)).toBeFalse();
      expect(service.isNotNil(undefined)).toBeFalse();
    });
  });

  describe('allNotNil', () => {
    it('should return true if all values are not null/undefined', () => {
      expect(
        service.allNotNil(
          ...([1, 'a', true, {}] as (unknown | null | undefined)[]),
        ),
      ).toBeTrue();
    });

    it('should return false if any value is null/undefined', () => {
      expect(
        service.allNotNil(
          ...([1, null, 'a'] as (unknown | null | undefined)[]),
        ),
      ).toBeFalse();

      expect(service.allNotNil(undefined, 'b')).toBeFalse();
    });
  });

  describe('filterNotNil', () => {
    it('should filter out null and undefined values', () => {
      const input = [1, null, 2, undefined, 3];
      const output = service.filterNotNil(input);
      expect(output).toEqual([1, 2, 3]);
    });

    it('should return empty array if all values are null/undefined', () => {
      const input = [null, undefined];
      const output = service.filterNotNil(input);
      expect(output).toEqual([]);
    });
  });
});
