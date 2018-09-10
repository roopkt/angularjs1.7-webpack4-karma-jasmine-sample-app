import { HeroService } from './hero.service';
import { HeroListComponent } from './herolist/herolist.component';
import { HeroDetailComponent } from './herodetail/herodetail.component';
import { createModule } from '../utils';

const COMPONENTS = [HeroListComponent, HeroDetailComponent];
const SERVICES = [HeroService];

export const HeroesModule = createModule({
    name:'heroes',
    components: COMPONENTS,
    services:SERVICES
}).name;
 


