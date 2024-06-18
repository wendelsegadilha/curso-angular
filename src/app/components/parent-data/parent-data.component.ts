import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrl: './parent-data.component.css',
})
export class ParentDataComponent implements OnInit {
  // recebendo o dado do componente pai
  @Input() name: string = '';
  @Input() userData!: { email: string; role: string };

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
