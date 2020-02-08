import { Component, OnInit } from '@angular/core';
import { Hero } from './hero';
import { HeroService } from './hero.service';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {

  
  heroes: Hero[];

  constructor(private heroService: HeroService, private appComponent: AppComponent) { }

  ngOnInit() {
    this.getHeroes();
    this.appComponent.title = "Heroes Of Marvel";
  }

  getHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => this.heroes = heroes);
  }

  add(name: string): void {
    name = name.trim();
    if (!name) return;
    this.heroService.addHero({name} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero)
      })
  }

  delete(hero: Hero): void {
    const index = this.heroes.indexOf(hero);
    var i = 0;
    this.heroService.deleteHero(hero)
      .subscribe(
        result => {
          i++;
          // Caso seja a segunda chamada (os testes de comparação de tipos estão falhando),
          // remove o item
          if (i === 2) {
            if (index > -1) {
              this.heroes.splice(index);
            }
            else {
              console.log(`Hero ${hero.name} cannot be removed from array`);
            }
  
          }
        
      });
  }

}
