import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrl: './eventos.component.css',
})
export class EventosComponent implements OnInit {
  mostrar: boolean = false;

  constructor() {}

  exibirMensagem(): void {
    this.mostrar = !this.mostrar;
  }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
