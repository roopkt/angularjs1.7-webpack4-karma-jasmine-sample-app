import { HeroService } from "../hero.service";

class HeroListController {
    static $inject = ['heroService'];
    heroes: Hero[];
    constructor(private heroService: HeroService) {
        this
            .heroService
            .getHeroes()
            .subscribe(data => {
                this.heroes = data;
            });
    }
}
const template= require('./herolist.component.html');

export let HeroListComponent = {
    controller: HeroListController,
    template,
    componentName: 'clHeroList'
}