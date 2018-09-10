import { HeroService } from './hero.service';
import { HeroListComponent } from './herolist/herolist.component';
import { HeroDetailComponent } from './herodetail/herodetail.component';
import { createModule } from '../utils';
import { HeroesComponent } from './heroes/heroes.component';

const COMPONENTS = [
    HeroDetailComponent,
    HeroListComponent,
    HeroesComponent,
];

const SERVICES = [HeroService];

export const HeroesModule = createModule({
    name: 'heroes',
    components: COMPONENTS,
    services: SERVICES
}).name;



