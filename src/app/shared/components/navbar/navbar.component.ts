import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BookTripComponent } from '../../../pages/book-trip/book-trip.component';
import { DestinationsComponent } from '../../../pages/destinations/destinations.component';
import { LoginComponent } from '../../../pages/login/login.component';
import { SignUpComponent } from '../../../pages/sign-up/sign-up.component';
import { ThailandTourismComponent } from '../../../pages/thailand-tourism/thailand-tourism.component';
import { TravelPackagesComponent } from '../../../pages/travel-packages/travel-packages.component';
import { NAVBAR_MENUS } from './data/navbar-menus.constant';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    CommonModule,
    ThailandTourismComponent,
    BookTripComponent,
    TravelPackagesComponent,
    DestinationsComponent,
    LoginComponent,
    SignUpComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  iConLanguage = 'assets/icons/language.png';
  menus = NAVBAR_MENUS;

  isPage = 'thailandTourism';
  selectLanguage(lang: string): void {
    console.log('เลือกภาษา:', lang);
  }

  changePage(page: string): void {
    console.log('เปลี่ยนหน้าไป:', page);
    this.isPage = page;
  }
}
