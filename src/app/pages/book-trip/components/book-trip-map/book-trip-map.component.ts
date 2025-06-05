import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';
import { CheckElementRefComponent } from '../../../../shared/utils/check-element-ref/check-element-ref.unils';
import { ValidationDataUnils } from '../../../../shared/utils/validation-data/validation-data.unils';
import { Airport } from '../body-book-trip/models/airport-seletor/airport-selector-th.model';

@Component({
  selector: 'app-book-trip-map',
  standalone: true,
  templateUrl: './book-trip-map.component.html',
  styleUrls: ['./book-trip-map.component.scss'],
})
export class BookTripMapComponent implements OnChanges {
  @Input() airportSelectorTH: Airport | null = null;
  @Input() airportSelectorUSA: Airport | null = null;
  @ViewChild('map', { static: false }) mapElementRef?: ElementRef;

  private map?: L.Map;

  constructor(
    private validationDataUnils: ValidationDataUnils,
    private checkElementRefComponent: CheckElementRefComponent,
  ) {}

  ngOnChanges(): void {
    const origin = this.getAirportLatLng(this.airportSelectorTH);
    const destination = this.getAirportLatLng(this.airportSelectorUSA);

    if (
      origin &&
      destination &&
      this.checkElementRefComponent.isAvailable(this.mapElementRef)
    ) {
      // ถ้าเคยมี map มาก่อน จะทำการ เคลียร์ map ก่อน
      if (this.map) {
        this.map.remove(); // เคลียร์แผนที่ก่อน render ใหม่
      }

      // สร้างแผนที่ใหม่
      this.map = L.map(this.mapElementRef!.nativeElement, {
        center: this.getCenter(origin, destination), // จุดศูนย์กลางระหว่างต้น-ปลายทาง
        zoom: 2,
        zoomControl: false,
        attributionControl: false,
      });

      // เพิ่ม tile layer จาก OpenStreetMap
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 18,
      }).addTo(this.map);

      // ปักหมุดสนามบินต้นทาง
      L.marker(origin, {
        icon: this.createPin('#ffd700'),
        title: 'ต้นทาง',
      }).addTo(this.map);

      // ปักหมุดสนามบินปลายทาง
      L.marker(destination, {
        icon: this.createPin('#00bfff'),
        title: 'ปลายทาง',
      }).addTo(this.map);

      /// วาดเส้นเชื่อมระหว่างต้นทางกับปลายทาง
      const line = L.polyline([origin, destination], {
        color: 'red',
        weight: 2,
      }).addTo(this.map);

      // ปรับ zoom ให้เห็นทั้งต้นทางและปลายทาง
      this.map.fitBounds(line.getBounds());
    }
  }

  // แปลงข้อมูลสนามบินเป็นพิกัด lat/lng ถ้า lat และ long ไม่ null
  getAirportLatLng(
    airport: Airport | null | undefined,
  ): L.LatLngLiteral | null {
    if (
      this.validationDataUnils.isNotNil(airport) &&
      this.validationDataUnils.allNotNil(airport.lat, airport.long)
    ) {
      return {
        lat: airport.lat as number,
        lng: airport.long as number,
      };
    }
    return null;
  }

  // คำนวณจุดกึ่งกลางระหว่างต้นทางกับปลายทาง
  getCenter(
    origin: L.LatLngLiteral,
    destination: L.LatLngLiteral,
  ): L.LatLngLiteral {
    return {
      lat: (origin.lat + destination.lat) / 2,
      lng: (origin.lng + destination.lng) / 2,
    };
  }

  // สร้าง Leaflet icon แบบ custom ด้วยสีที่กำหนด
  createPin(color: string): L.Icon {
    return new L.Icon({
      iconUrl: this.createColoredPin(color),
      iconSize: [25, 41],
      iconAnchor: [12, 41],
      popupAnchor: [1, -34],
      shadowUrl:
        'https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png',
      shadowSize: [41, 41],
    });
  }

  // สร้าง SVG เป็น base64 image ด้วยสีที่กำหนด (วงกลมเล็ก ๆ)
  createColoredPin(color: string): string {
    const svg = `
      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="50" viewBox="0 0 40 50">
        <circle cx="20" cy="20" r="10" fill="${color}" stroke="black" stroke-width="2"/>
      </svg>`;
    return 'data:image/svg+xml;base64,' + btoa(svg);
  }
}
