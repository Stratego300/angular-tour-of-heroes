import { Injectable } from '@angular/core';
import {Hero} from './hero';
import {HEROES} from './mock-heroes';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/delay';
import {MessageService} from './message.service';


@Injectable()
export class HeroService {

  constructor( private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {

    this.messageService.addMessage('HeroService: fetched heroes');

    let heroes: Observable<Hero[]>;
    heroes = of(HEROES);
    return heroes.delay(0);
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`HeroService: fetching the hero with id=${id}`);

    return of(HEROES.find(hero => hero.id === id));
  }
}
