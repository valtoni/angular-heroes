import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './heroes/hero';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {
  
  createDb() {
    const heroes: Hero[] = [
      { id: 11, name: 'Captain Marvel' },
      { id: 12, name: 'Black Panter' },
      { id: 13, name: 'Spider-Man' },
      { id: 14, name: 'Iron Man' },
      { id: 15, name: 'Captain America' },
      { id: 16, name: 'Black Widow' },
      { id: 17, name: 'Hulk' },
      { id: 18, name: 'Hawkeye' },
      { id: 19, name: 'Thor' },
      { id: 20, name: 'Ant-Man' },
      { id: 21, name: 'Black Man Rider' },
    ]
    return { heroes };
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // If the heroes array is not empty, the method belows returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  } 

  constructor() { }
}
