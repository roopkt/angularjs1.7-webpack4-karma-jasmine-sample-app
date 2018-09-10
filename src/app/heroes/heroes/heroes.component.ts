import { routes } from "../heroes.routes";

const template = require('./heroes.component.html');
export let HeroesComponent  = {
    template, 
    componentName:'clHeroes',
    $routeConfig : routes
}