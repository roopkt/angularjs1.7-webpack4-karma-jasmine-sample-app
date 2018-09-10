import { routes } from "./app.routes";

const template = require('./app.component.html');

export let AppComponent = {
    template:template,
    componentName: 'clApp',
    $routeConfig:routes
};

