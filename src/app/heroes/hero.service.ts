import { of } from 'rxjs'

export class HeroService {
    static serviceName = 'heroService';
    static heroes: Hero[] = [
        { id: 11, name: 'Mr. Nice' },
        { id: 12, name: 'Narco' },
        { id: 13, name: 'Bombasto' },
        { id: 14, name: 'Celeritas' },
        { id: 15, name: 'Magneta' },
        { id: 16, name: 'RubberMan' }
    ]
    getHeroes() {
        return of(HeroService.heroes);
    }
}