import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-pai',
  templateUrl: './componente-pai.component.html',
  styleUrl: './componente-pai.component.css',
})
export class ComponentePaiComponent {
  myNumber = 0;

  onChangeNuber() {
    this.myNumber = Math.floor(Math.random() * 10);
  }
}
