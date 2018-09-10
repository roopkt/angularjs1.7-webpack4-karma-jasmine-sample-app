import { createModule } from "./utils";
import { HeroesModule } from "./heroes/heroes.module";
import { AppComponent } from "./app.component";

const appModule = createModule(
    {
        name: 'clApp',
        deps: [
            'ngComponentRouter',
            HeroesModule,
        ],

    }
);

appModule
    .config(
        ['$locationProvider',
            ($locationProvider: ng.ILocationProvider) => $locationProvider.html5Mode(true)
        ])
    .value('$routerRootComponent',
        AppComponent.componentName);

        export const AppModule = appModule.name;
        
