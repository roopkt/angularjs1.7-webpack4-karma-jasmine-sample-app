import { HeroService } from "../hero.service";

class HeroDetailController implements ng.IComponentController {
    static $inject = ['heroService'];
    hero: Hero ;
    constructor(private heroService: HeroService) {
       
    }
    $routerOnActivate (){
        this.hero = {id:1, name:'rupesh'};
    }
}
const template = require('./herodetail.component.html');

export let HeroDetailComponent = {
    controller: HeroDetailController,
    template,
    componentName: 'clHeroDetail',
    bindings: { $router: '<' },
}