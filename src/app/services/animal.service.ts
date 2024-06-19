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

  getItem(id: number): Observable<Animal> {
    return this.http.get<Animal>(`${this.urlApi}/${id}`);
  }

  remove(id: number) {
    return this.http.delete(`${this.urlApi}/${id}`);
  }
}
