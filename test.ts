import { Builder, Capabilities, Executor } from 'selenium-webdriver';

import { assert, expect } from 'chai';
import { driver } from 'mocha-webdriver';

import { showShipTravel, Planet, ProductInfo } from './main_screen'
import { Command } from 'selenium-webdriver/lib/command';

describe('testDistance', () => {

    it('Test liczenia odleglosci miedzy planetami', () => {
        let planet = new Planet(10, 10, "test", new Set());
        expect(planet.distance(20, 20)).to.equal(15);
        expect(planet.distance(11, 11)).to.equal(2);

       


    });

})

describe('Buy and sell Test', () =>  {
    it('Test na kupowanie i sprzedawanie towarow na planecie', () =>  {
        let my_set = new Set<ProductInfo>();
        my_set.add(new ProductInfo(10, 23, 21, "Woda"));
        my_set.add(new ProductInfo(64, 10, 9, "Dwimeryt"));
        my_set.add(new ProductInfo(13, 37, 32, "Unobtainium"));
        let planet = new Planet(10, 10, "test", my_set);
        expect(planet.buy("Woda", 20)).to.equal(420);
        expect(planet.buy("DOESNT_EXIST", 10)).to.equal(-1); 
        expect(planet.sell("Dwimeryt", 10, 1000)).to.equal(100);
        expect(planet.sell("Dwimeryt", 10, 10)).to.equal(-1); // Not enough credits
        expect(planet.sell("Dwimeryt", 100000, 1000000000)).to.equal(-1); // Too much cargo
        expect(planet.sell("DOESNT_EXIST", 100, 100000)).to.equal(-1);


    });
})

describe('TestListyPlanet', function () {

    it('Sprawdzenie czy istnieje jakas planeta', async function() {
        this.timeout(20000);
        await driver.get('file:///home/maciej_bala/www_projekt/main_screen.html');
        let driver_find_result =  await driver.find('#planet_table td');
        assert(driver_find_result != null);

        let planet_name_promise = driver_find_result.getText();
        planet_name_promise.then(async function(result) {
            assert(result == "Alderaan");
        });
        
    });

})

describe('TestListyStatkow', function () {

    it('Sprawdzenie czy istnieje jakis statek', async function() {
        this.timeout(20000);
        await driver.get('file:///home/maciej_bala/www_projekt/main_screen.html');
        let driver_find_result =  await driver.find('#ships_table td');

        let planet_name_promise = driver_find_result.getText();
        driver_find_result.doClick();
        planet_name_promise.then(async function(result) {
            assert(result == "Axiom");
        });
        // Test with assumption that ship id is "Axiom"
        let ship_result = await driver.find('#Axiom_buy select');
        ship_result.sendKeys("Woda");
        await driver.find('#Axiom_buy input[type=number]').sendKeys(1);
        await driver.find('#Axiom_buy input[type=button]').doClick();

        this.timeout(20000);

        expect(await driver.find('#Axiom table').getText()).to.include('Woda');
        
    });

})

