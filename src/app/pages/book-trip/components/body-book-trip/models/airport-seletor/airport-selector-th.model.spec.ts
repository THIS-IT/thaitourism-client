import {
  Airport,
  AirportSelectorModel,
  ProvinceAirports,
} from './airport-selector-th.model';

describe('airportSelectorModel', () => {
  let airportSelectorModel: AirportSelectorModel;

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
    airportSelectorModel = new AirportSelectorModel(mockData);
  });

  it('should initialize with no selected province or airport', () => {
    expect(airportSelectorModel.selectedProvince).toBeNull();
    expect(airportSelectorModel.selectedAirport).toBeNull();
    expect(airportSelectorModel.selectedAirportIATA).toBeNull();
  });

  it('should list all provinces', () => {
    expect(airportSelectorModel.provinces).toEqual(['กรุงเทพฯ', 'เชียงใหม่']);
  });

  it('should select a province and list its airports', () => {
    airportSelectorModel.selectProvince('กรุงเทพฯ');
    expect(airportSelectorModel.selectedProvince?.province).toBe('กรุงเทพฯ');
    expect(airportSelectorModel.airports.length).toBe(2);
  });

  it('should reset airport when province changes', () => {
    airportSelectorModel.selectProvince('กรุงเทพฯ');
    airportSelectorModel.selectAirport('BKK');
    expect(airportSelectorModel.selectedAirportName).toBe('BKK');
    expect(airportSelectorModel.selectedAirport?.iata).toBe('BKK');

    airportSelectorModel.selectProvince('เชียงใหม่');
    expect(airportSelectorModel.selectedAirport).toBeNull();
    expect(airportSelectorModel.selectedAirportName).toBeNull();
  });

  it('should select airport correctly', () => {
    airportSelectorModel.selectProvince('กรุงเทพฯ');
    airportSelectorModel.selectAirport('DMK');
    expect(airportSelectorModel.selectedAirportName).toBe('DMK');
    expect(airportSelectorModel.selectedAirport?.name).toBe(
      'ท่าอากาศยานดอนเมือง',
    );
  });

  it('should return empty array if no province is selected', () => {
    expect(airportSelectorModel.airports).toEqual([]);
  });

  it('should return selected airport IATA correctly', () => {
    airportSelectorModel.selectProvince('กรุงเทพฯ');
    airportSelectorModel.selectAirport('BKK');
    expect(airportSelectorModel.selectedAirportIATA).toBe('BKK');
  });

  it('should not crash if selecting non-existent province or airport', () => {
    airportSelectorModel.selectProvince('นครปฐม');
    expect(airportSelectorModel.selectedProvince).toBeNull();
    expect(airportSelectorModel.airports).toEqual([]);

    airportSelectorModel.selectAirport('XXX'); // ไม่มี province ถูกเลือก
    expect(airportSelectorModel.selectedAirport).toBeNull();
    expect(airportSelectorModel.selectedAirportName).toBe('XXX');
  });
});
