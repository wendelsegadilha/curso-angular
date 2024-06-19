import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe-operator',
  templateUrl: './pipe-operator.component.html',
  styleUrl: './pipe-operator.component.css',
})
export class PipeOperatorComponent {
  frase = 'WENDEL é um excelelnte programador';
  now = new Date();
}
