# ThaitourismClient

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.14.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.

## 📘 ตารางสรุปคำสั่ง Angular CLI

| องค์ประกอบ    | คำสั่งย่อ | คำสั่งเต็ม              | คำอธิบาย                                                                                                |
| ------------- | --------- | ----------------------- | ------------------------------------------------------------------------------------------------------- |
| **Component** | `ng g c`  | `ng generate component` | สร้าง UI component พร้อมไฟล์ `.ts`, `.html`, `.css`, และ `.spec.ts` npx ng g c shared/components/navbar |
| **Module**    | `ng g m`  | `ng generate module`    | สร้างโมดูลใหม่เพื่อจัดกลุ่ม component, directive, pipe, และ service                                     |
| **Service**   | `ng g s`  | `ng generate service`   | สร้าง service สำหรับจัดการ logic และการดึงข้อมูล                                                        |
| **Directive** | `ng g d`  | `ng generate directive` | สร้าง directive เพื่อเพิ่มพฤติกรรมให้กับ DOM elements                                                   |
| **Pipe**      | `ng g p`  | `ng generate pipe`      | สร้าง pipe สำหรับแปลงข้อมูลใน template                                                                  |
| **Guard**     | `ng g g`  | `ng generate guard`     | สร้าง guard เพื่อควบคุมการเข้าถึง route                                                                 |
| **Interface** | `ng g i`  | `ng generate interface` | สร้าง interface เพื่อกำหนดโครงสร้างของข้อมูล                                                            |
| **Class**     | `ng g cl` | `ng generate class`     | สร้าง class ทั่วไปสำหรับจัดการ logic หรือข้อมูล                                                         |
| **Enum**      | `ng g e`  | `ng generate enum`      | สร้าง enum สำหรับกำหนดค่าคงที่ที่มีชื่อ                                                                 |
