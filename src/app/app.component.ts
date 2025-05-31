import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './shared/components/navbar/navbar.component';

@Component({
  selector: 'app-root', // ชื่อ component ที่จะเอาไปใช้ใน HTML เช่น <app-root></app-root>
  imports: [RouterOutlet, NavbarComponent], // ตัวนี้สำหรับ standalone component เท่านั้น ใส่พวก directives, components, pipes ที่ template จะใช้
  templateUrl: './app.component.html', // ไฟล์ HTML ที่เป็น template ของ component นี้
  styleUrl: './app.component.scss', // ไฟล์ CSS/SCSS ที่จะใช้กับ component นี้ (จริงๆ ต้องเป็น styleUrls เป็น plural นะ)
})
export class AppComponent {}
