import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CarouselImageComponent } from '../../../../shared/components/carousel-image.component/carousel-image.component';
import { AirportSelectorComponent } from '../airport-selector/airport-selector.component';
import {
  dataAirportsByProvinceTH,
  dataAirportsByProvinceUSA,
} from './data/airports.constant';
import { AirportSelectorModel } from './models/airport-seletor/airport-selector-th.model';

@Component({
  selector: 'app-body-book-trip',
  imports: [
    CommonModule,
    FormsModule,
    AirportSelectorComponent,
    CarouselImageComponent,
  ],
  standalone: true,
  templateUrl: './body-book-trip.component.html',
  styleUrls: ['./body-book-trip.component.scss'],
})
export class BodyBookTripComponent {
  flowerImage = 'assets/images/hibiscus.png';
  airportSelectorTH = new AirportSelectorModel(dataAirportsByProvinceTH);
  airportSelectorUSA = new AirportSelectorModel(dataAirportsByProvinceUSA);
}
