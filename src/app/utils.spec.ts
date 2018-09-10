import { createModule } from "./utils";

describe('utils', () => {
    let mymodule: ng.IModule;
    beforeEach(() => {
        mymodule = createModule({
            name: 'testmodule'
        });
    });

    it('can create angular module', () => {
        expect(mymodule).toBeDefined();
    });

    it('has correct module name', () => {
        expect(mymodule.name).toBe('testmodule')
    });
})