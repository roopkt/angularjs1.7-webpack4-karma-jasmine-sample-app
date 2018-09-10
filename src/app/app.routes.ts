import { AppComponent } from "./app.component";
import { HeroesComponent } from "./heroes/heroes/heroes.component";

export const routes = [
    {
        path: '/heroes/...',
        name: 'Heroes',
        component: HeroesComponent.componentName,
        useAsDefault: true
    },
]