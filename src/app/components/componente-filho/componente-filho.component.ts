import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-componente-filho',
  templateUrl: './componente-filho.component.html',
  styleUrl: './componente-filho.component.css',
})
export class ComponenteFilhoComponent {
  @Output() changeNumber: EventEmitter<any> = new EventEmitter();

  handleClick() {
    this.changeNumber.emit();
  }
}
