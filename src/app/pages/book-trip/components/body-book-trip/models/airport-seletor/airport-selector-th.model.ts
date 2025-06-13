export class Airport {
  constructor(
    public name: string,
    public iata: string,
    public lat?: number,
    public long?: number,
  ) {}
}

export class ProvinceAirports {
  constructor(public province: string, public airports: Airport[]) {}
}

export class AirportSelectorModel {
  selectedProvince: ProvinceAirports | null = null;
  selectedProvinceName: string | null = null;

  selectedAirport: Airport | null = null;
  selectedAirportName: string | null = null;

  constructor(public data: ProvinceAirports[]) {}

  get provinces(): string[] {
    return this.data.map((p) => p.province);
  }

  get airports(): Airport[] {
    return this.selectedProvince?.airports ?? [];
  }

  selectProvince(provinceName: string): void {
    this.selectedProvinceName = provinceName;
    this.selectedProvince =
      this.data.find((p) => p.province === provinceName) || null;
    this.selectedAirport = null;
    this.selectedAirportName = null;
  }

  selectAirport(iata: string): Airport | null {
    this.selectedAirportName = iata;
    this.selectedAirport = this.airports.find((a) => a.iata === iata) || null;

    return this.selectedAirport;
  }

  get selectedAirportIATA(): string | null {
    return this.selectedAirport?.iata || null;
  }
}
