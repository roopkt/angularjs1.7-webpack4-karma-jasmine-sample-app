import { createModule } from "./utils";

describe('utils',()=>{
    it('can create angular module', ()=>{
      const module =  createModule({
name :'testmodule'
        });
        expect(module).toBeDefined();
    })
})