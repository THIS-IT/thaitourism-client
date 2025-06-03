import { Component, OnInit } from '@angular/core';
import { BodyBookTripComponent } from './components/body-book-trip/body-book-trip.component';
import { HeaderBookTripComponent } from './components/header-book-trip/header-book-trip.component';

@Component({
  selector: 'app-book-trip',
  imports: [HeaderBookTripComponent, BodyBookTripComponent],
  standalone: true,
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.scss'],
})
export class BookTripComponent implements OnInit {
  ngOnInit(): void {
    console.log('🟢 BookTripComponent Loaded!');
  }
}
