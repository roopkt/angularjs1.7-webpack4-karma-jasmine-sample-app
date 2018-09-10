import { createModule } from "./utils";
import { HeroesModule } from "./heroes/heroes.module";
import { AppComponent } from "./app.component";

const COMPONENTS = [
    AppComponent
];

export const appModule = createModule(
    {
        name: 'clApp',
        deps: [
            'ngComponentRouter',
            HeroesModule,
        ],
        components: COMPONENTS
    }
)
    .config(['$locationProvider',
        ($locationProvider: ng.ILocationProvider) => $locationProvider.html5Mode(true)
    ])
    .value('$routerRootComponent',
        AppComponent.componentName);



