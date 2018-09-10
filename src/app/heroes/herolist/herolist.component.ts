import { HeroService } from "../hero.service";

class HeroListController {
    static $inject = [HeroService.serviceName];
    public heroes: Hero[];

    constructor(private heroService: HeroService) {

    }

    $routerOnActivate() {
        this
            .heroService
            .getHeroes()
            .subscribe(data => {
                this.heroes = data;
            });
    }
    isSelected(id: number) {
        return true;
    }
}

const template = require('./herolist.component.html');

export let HeroListComponent = {
    controller: HeroListController,
    template,
    componentName: 'clHeroList'
}