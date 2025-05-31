import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent {
  iConLanguage = 'assets/icons/language.png';

  selectLanguage(lang: string): void {
    console.log('เลือกภาษา:', lang);
  }
}
