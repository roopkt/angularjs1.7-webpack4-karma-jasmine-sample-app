import { routes } from "../heroes.routes";
import { HeroListComponent } from "../herolist/herolist.component";
import { HeroDetailComponent } from "../herodetail/herodetail.component";

const template = require('./heroes.component.html');

export let HeroesComponent  = {
    template, 
    componentName:'clHeroes',
    $routeConfig :  [
        {
            path: '/',
            name: 'HeroList',
            component: HeroListComponent.componentName,
            useAsDefault: true
        },
        {
            path: '/:id',
            name: 'HeroDetail',
            component:HeroDetailComponent.componentName
        }
    ],
}
