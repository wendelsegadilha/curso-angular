import { Component } from '@angular/core';
import { Animal } from '../../interfaces/animal';
import { ActivatedRoute } from '@angular/router';
import { AnimalService } from '../../services/animal.service';

@Component({
  selector: 'app-item-detail',
  templateUrl: './item-detail.component.html',
  styleUrl: './item-detail.component.css',
})
export class ItemDetailComponent {
  animal?: Animal;

  constructor(
    private animalService: AnimalService,
    private route: ActivatedRoute
  ) {
    this.getAnimal();
  }

  getAnimal() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.animalService.getItem(id).subscribe((animal) => {
      this.animal = animal;
    });
  }
}
