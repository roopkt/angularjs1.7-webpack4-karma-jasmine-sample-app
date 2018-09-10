import * as angular from "angular";

export interface IModuleOptions {
    name: string;
    deps?: any[];
    components?: any[];
    services?: any[];
}

export function createModule(options: IModuleOptions) {
    const {
        name, deps, components, services
    } = options;
    const app = angular.module(name, deps || []);
    (components || []).forEach(c => app.component(c.componentName, c));
    (services || []).forEach(s => app.service(s.serviceName, s));
    return app;
}