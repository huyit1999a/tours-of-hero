import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from '../hero';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const heroes = [
      { id: 1, name: 'Hulk' },
      { id: 2, name: 'Iron Man' },
      { id: 3, name: 'Captain' },
      { id: 4, name: 'Dr Strange' },
      { id: 5, name: 'Thor' },
      { id: 6, name: 'Huy' },
      { id: 7, name: 'Nguyen' },
      { id: 8, name: 'Dr IQ' },
      { id: 9, name: 'Toro' },
      { id: 10, name: 'Flash' },
    ];
    return { heroes };
  }

  genId(heroes: Hero[]): number {
    return heroes.length > 0
      ? Math.max(...heroes.map((hero) => hero.id)) + 1
      : 1;
  }
}
