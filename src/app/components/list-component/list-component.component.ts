import { Component, OnInit } from '@angular/core';
import { Animal } from '../../interfaces/animal';

import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-list-component',
  templateUrl: './list-component.component.html',
  styleUrl: './list-component.component.css',
})
export class ListComponentComponent implements OnInit {
  animals: Animal[] = [];

  constructor(private animalService: AnimalService) {}

  mostarNoConsole(animal: Animal) {
    console.log(animal);
  }

  removeAnimal(animal: Animal) {
    this.animals = this.animals.filter((a) => animal.name !== a.name);
    this.animalService.remove(animal.id).subscribe();
  }

  getListAnimals(): void {
    this.animalService.getListAnimals().subscribe((animals) => {
      this.animals = animals;
    });
  }

  ngOnInit(): void {
    this.getListAnimals();
  }
}
