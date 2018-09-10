import { HeroListComponent } from "./herolist/herolist.component";
import { HeroDetailComponent } from "./herodetail/herodetail.component";

export const routes = [
    {
        path: '/',
        name: 'HeroList',
        component: HeroListComponent.componentName
        ,
        useAsDefault: true
    },
    {
        path: '/:id',
        name: 'HeroDetail',
        component:HeroDetailComponent.componentName
    }
]