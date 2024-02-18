import { element, by, browser } from "protractor";

describe('Test de login', ()=>{
    //codigo de config
    beforeEach(()=>{
        browser.get("/home");
    });
    //prueba
    it ("La página debe entrar a login automaticamente",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("/clases");
        //expect indica que se debe hacer
    });
    it ("La página debe entrar a login automaticamente",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("/calendario");
        //expect indica que se debe hacer
    });
    it ("La página debe entrar a login automaticamente",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("/notas");
        //expect indica que se debe hacer
    });
    it ("La página debe entrar a login automaticamente",()=>{
        expect(element(by.css(".page-selected ion-label")).getText()).toContain("/pagos");
        //expect indica que se debe hacer
    });
});
