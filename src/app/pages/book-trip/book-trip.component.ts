import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-book-trip',
  imports: [],
  standalone: true,
  templateUrl: './book-trip.component.html',
  styleUrls: ['./book-trip.component.scss'],
})
export class BookTripComponent implements OnInit {
  ngOnInit(): void {
    console.log('🟢 BookTripComponent Loaded!');
  }
}
