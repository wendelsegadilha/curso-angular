import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'curso-angular';

  userName = 'Venes Lopes';
  userData = {
    email: 'venes.lopes@gmail.com',
    role: 'admin',
  };
}
