import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messageService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    this.messageService.add('HeroServiec: fetched Heroes');
    return of(HEROES);
  }

  getHero(heroId: number): Observable<Hero> {
    this.messageService.add(`HeroService: fetched Hero(${heroId})`);
    return of (HEROES.find(({ id }) => id === heroId));
  }
}
