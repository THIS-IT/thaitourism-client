import {
  Airport,
  AirportSelector,
  ProvinceAirports,
} from './airport-selector-th.model';

describe('AirportSelector', () => {
  let airportSelector: AirportSelector;

  const mockData: ProvinceAirports[] = [
    new ProvinceAirports('กรุงเทพฯ', [
      new Airport('ท่าอากาศยานสุวรรณภูมิ', 'BKK'),
      new Airport('ท่าอากาศยานดอนเมือง', 'DMK'),
    ]),
    new ProvinceAirports('เชียงใหม่', [
      new Airport('ท่าอากาศยานเชียงใหม่', 'CNX'),
    ]),
  ];

  beforeEach(() => {
    airportSelector = new AirportSelector(mockData);
  });

  it('should initialize with no selected province or airport', () => {
    expect(airportSelector.selectedProvince).toBeNull();
    expect(airportSelector.selectedAirport).toBeNull();
    expect(airportSelector.selectedAirportIATA).toBeNull();
  });

  it('should list all provinces', () => {
    expect(airportSelector.provinces).toEqual(['กรุงเทพฯ', 'เชียงใหม่']);
  });

  it('should select a province and list its airports', () => {
    airportSelector.selectProvince('กรุงเทพฯ');
    expect(airportSelector.selectedProvince?.province).toBe('กรุงเทพฯ');
    expect(airportSelector.airports.length).toBe(2);
  });

  it('should reset airport when province changes', () => {
    airportSelector.selectProvince('กรุงเทพฯ');
    airportSelector.selectAirport('BKK');
    expect(airportSelector.selectedAirportName).toBe('BKK');
    expect(airportSelector.selectedAirport?.iata).toBe('BKK');

    airportSelector.selectProvince('เชียงใหม่');
    expect(airportSelector.selectedAirport).toBeNull();
    expect(airportSelector.selectedAirportName).toBeNull();
  });

  it('should select airport correctly', () => {
    airportSelector.selectProvince('กรุงเทพฯ');
    airportSelector.selectAirport('DMK');
    expect(airportSelector.selectedAirportName).toBe('DMK');
    expect(airportSelector.selectedAirport?.name).toBe('ท่าอากาศยานดอนเมือง');
  });

  it('should return empty array if no province is selected', () => {
    expect(airportSelector.airports).toEqual([]);
  });

  it('should return selected airport IATA correctly', () => {
    airportSelector.selectProvince('กรุงเทพฯ');
    airportSelector.selectAirport('BKK');
    expect(airportSelector.selectedAirportIATA).toBe('BKK');
  });

  it('should not crash if selecting non-existent province or airport', () => {
    airportSelector.selectProvince('นครปฐม');
    expect(airportSelector.selectedProvince).toBeNull();
    expect(airportSelector.airports).toEqual([]);

    airportSelector.selectAirport('XXX'); // ไม่มี province ถูกเลือก
    expect(airportSelector.selectedAirport).toBeNull();
    expect(airportSelector.selectedAirportName).toBe('XXX');
  });
});
