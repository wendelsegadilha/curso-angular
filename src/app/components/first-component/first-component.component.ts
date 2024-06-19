import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first-component',
  templateUrl: './first-component.component.html',
  styleUrl: './first-component.component.css',
})
export class FirstComponentComponent implements OnInit {
  name: string = 'Wendel Segadilha';
  age: number = 29;
  enable: boolean = true;
  jobs: string[] = ['Programador', 'Instrutor'];
  book = {
    name: 'Java Como Programar',
    year: 2020,
  };

  constructor() {}

  ngOnInit(): void {}
}
