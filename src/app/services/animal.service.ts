import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/animal';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  remove(animals: Animal[], animal: Animal) {
    console.log(animal);
    animals = animals.filter((a) => animal.name !== a.name);
    console.log(animals);
    return animals;
  }

  constructor() {}
}
