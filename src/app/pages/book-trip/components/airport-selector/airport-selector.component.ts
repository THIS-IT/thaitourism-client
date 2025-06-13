import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AirportSelectorModel } from '../body-book-trip/models/airport-seletor/airport-selector-th.model';

@Component({
  selector: 'app-airport-selector',
  imports: [CommonModule, FormsModule],
  templateUrl: './airport-selector.component.html',
  styleUrl: './airport-selector.component.scss',
})
export class AirportSelectorComponent {
  @Input() selector!: AirportSelectorModel;
  @Input() labelProvince = 'Province';
  @Input() labelAirport = 'Airport';
  @Input() placeholderProvince = 'Select Province';
  @Input() placeholderAirport = 'Select Airport';
}
