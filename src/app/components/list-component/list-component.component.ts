import { Component, OnInit } from '@angular/core';
import { Animal } from '../../interfaces/animal';

import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',
})
export class ListComponentComponent implements OnInit {
  animals: Animal[] = [
    { id: 1, name: 'Frida', type: 'Dog', age: 5 },
    { id: 2, name: 'Ping', type: 'Cat', age: 1 },
    { id: 3, name: 'Pong', type: 'Cat', age: 1 },
    { id: 4, name: 'Mokita', type: 'Dog', age: 2 },
  ];

  constructor(private animalService: AnimalService) {}

  mostarNoConsole(animal: Animal) {
    console.log(animal);
  }

  removeAnimal(animal: Animal) {
    console.log('deu certo aqui');
    this.animals = this.animalService.remove(this.animals, animal);
  }

  ngOnInit(): void {}
}
