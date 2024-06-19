import { Injectable } from '@angular/core';
import { Animal } from '../interfaces/animal';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AnimalService {
  urlApi = 'http://localhost:3000/animals';

  constructor(private http: HttpClient) {}

  getListAnimals(): Observable<Animal[]> {
    return this.http.get<Animal[]>(this.urlApi);
  }

  remove(animals: Animal[], animal: Animal) {
    console.log(animal);
    animals = animals.filter((a) => animal.name !== a.name);
    console.log(animals);
    return animals;
  }
}
