"use strict";
var __values = (this && this.__values) || function (o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
};
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
var account_value = 1984;
var ProductInfo = /** @class */ (function () {
    function ProductInfo(available, buy_price, sell_price, name) {
        this.available = available;
        this.buy_price = buy_price;
        this.sell_price = sell_price;
        this.name = name;
    }
    return ProductInfo;
}());
exports.ProductInfo = ProductInfo;
var Planet = /** @class */ (function () {
    function Planet(x_coord, y_coord, name, products) {
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.name = name;
        this.products = products;
    }
    Planet.prototype.distance = function (new_x, new_y) {
        var a = Math.abs(this.x_coord - new_x);
        a *= a;
        var b = Math.abs(this.y_coord - new_y);
        b *= b;
        return Math.ceil(Math.sqrt(a + b));
    };
    Planet.prototype.sell = function (product_name, quantity, credits) {
        var e_1, _a;
        try {
            for (var _b = __values(this.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.name == product_name && item.available >= quantity && item.sell_price * quantity <= credits) {
                    item.available -= quantity;
                    return item.buy_price * quantity;
                }
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        return -1;
    };
    Planet.prototype.buy = function (product_name, quantity) {
        var e_2, _a;
        try {
            for (var _b = __values(this.products), _c = _b.next(); !_c.done; _c = _b.next()) {
                var item = _c.value;
                if (item.name == product_name) {
                    item.available += quantity;
                    return item.sell_price * quantity;
                }
            }
        }
        catch (e_2_1) { e_2 = { error: e_2_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_2) throw e_2.error; }
        }
        return -1;
    };
    return Planet;
}());
exports.Planet = Planet;
var Starship = /** @class */ (function () {
    function Starship(name, cargo_size, planet) {
        this.name = name;
        this.cargo_size = cargo_size;
        this.planet = planet;
        this.products = new Map();
        this.current_cargo = 0;
    }
    return Starship;
}());
var GlobalInfo = /** @class */ (function () {
    function GlobalInfo() {
        this.planets = new Set();
        this.ships = new Set();
    }
    return GlobalInfo;
}());
var global_info = new GlobalInfo();
var ship_set = new Set();
ship_set.add(new Starship("Nostromo", 25, "Arrakis"));
ship_set.add(new Starship("Rocinante", 30, "Alderaan"));
ship_set.add(new Starship("Niezwyciężony", 60, "Argoland"));
ship_set.add(new Starship("MilleniumFalcon", 35, "Tatooine"));
ship_set.add(new Starship("Enterprise", 46, "Corellia"));
ship_set.add(new Starship("КосмонавтАлексе́йЛео́нов", 35, "Arrakis"));
ship_set.add(new Starship("NormandySR-2", 40, "Gaia"));
ship_set.add(new Starship("Hermes", 26, "NowWhat"));
ship_set.add(new Starship("Axiom", 27, "Tatooine"));
ship_set.add(new Starship("Goliath", 33, "Sur\'Kesh"));
global_info.ships = ship_set;
var my_set = new Set();
my_set.add(new ProductInfo(50, 8, 7, "Dwimeryt"));
my_set.add(new ProductInfo(9, 38, 33, "Unobtainium"));
my_set.add(new ProductInfo(6, 89, 85, "Murkwie"));
my_set.add(new ProductInfo(7, 65, 57, "Proteańskie dyski"));
my_set.add(new ProductInfo(11, 45, 41, "Złoto"));
my_set.add(new ProductInfo(39, 18, 16, "Nuka-Cola"));
my_set.add(new ProductInfo(36, 12, 11, "Cynamon"));
my_set.add(new ProductInfo(5, 121, 112, "Ziemniaki"));
my_set.add(new ProductInfo(60, 9, 9, "Lyrium"));
global_info.planets.add(new Planet(32, 5, "Leonida", my_set));
my_set = new Set();
my_set.add(new ProductInfo(10, 23, 21, "Woda"));
my_set.add(new ProductInfo(64, 10, 9, "Dwimeryt"));
my_set.add(new ProductInfo(13, 37, 32, "Unobtainium"));
my_set.add(new ProductInfo(6, 81, 71, "Murkwie"));
my_set.add(new ProductInfo(7, 89, 84, "Proteańskie dyski"));
my_set.add(new ProductInfo(19, 35, 32, "Złoto"));
my_set.add(new ProductInfo(39, 15, 13, "Nuka-Cola"));
my_set.add(new ProductInfo(60, 11, 10, "Cynamon"));
my_set.add(new ProductInfo(7, 95, 87, "Ziemniaki"));
my_set.add(new ProductInfo(45, 8, 7, "Lyrium"));
global_info.planets.add(new Planet(47, 68, "Tatooine", my_set));
my_set = new Set();
my_set.add(new ProductInfo(22, 9, 9, "Dwimeryt"));
my_set.add(new ProductInfo(9, 67, 66, "Murkwie"));
my_set.add(new ProductInfo(9, 82, 71, "Proteańskie dyski"));
my_set.add(new ProductInfo(17, 28, 24, "Złoto"));
my_set.add(new ProductInfo(27, 18, 16, "Nuka-Cola"));
my_set.add(new ProductInfo(62, 8, 7, "Cynamon"));
my_set.add(new ProductInfo(4, 74, 63, "Ziemniaki"));
global_info.planets.add(new Planet(35, 41, "NowWhat", my_set));
my_set = new Set();
my_set.add(new ProductInfo(15, 28, 24, "Woda"));
my_set.add(new ProductInfo(51, 7, 6, "Dwimeryt"));
my_set.add(new ProductInfo(8, 39, 37, "Unobtainium"));
my_set.add(new ProductInfo(9, 90, 82, "Murkwie"));
my_set.add(new ProductInfo(10, 71, 65, "Proteańskie dyski"));
my_set.add(new ProductInfo(12, 46, 40, "Złoto"));
my_set.add(new ProductInfo(46, 18, 16, "Nuka-Cola"));
my_set.add(new ProductInfo(59, 10, 9, "Cynamon"));
my_set.add(new ProductInfo(10, 61, 57, "Ziemniaki"));
my_set.add(new ProductInfo(65, 11, 10, "Lyrium"));
global_info.planets.add(new Planet(27, 76, "Tuchanka", my_set));
my_set = new Set();
my_set.add(new ProductInfo(106, 8, 7, "Dwimeryt"));
my_set.add(new ProductInfo(7, 82, 75, "Murkwie"));
my_set.add(new ProductInfo(21, 37, 36, "Unobtainium"));
my_set.add(new ProductInfo(13, 38, 32, "Złoto"));
my_set.add(new ProductInfo(30, 18, 17, "Nuka-Cola"));
my_set.add(new ProductInfo(58, 8, 7, "Cynamon"));
my_set.add(new ProductInfo(6, 77, 69, "Ziemniaki"));
my_set.add(new ProductInfo(31, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(94, 24, "Ziemia", my_set));
my_set = new Set();
my_set.add(new ProductInfo(23, 10, 10, "Dwimeryt"));
my_set.add(new ProductInfo(5, 73, 64, "Murkwie"));
my_set.add(new ProductInfo(10, 75, 65, "Proteańskie dyski"));
my_set.add(new ProductInfo(12, 34, 30, "Złoto"));
my_set.add(new ProductInfo(25, 22, 19, "Nuka-Cola"));
my_set.add(new ProductInfo(6, 69, 61, "Ziemniaki"));
my_set.add(new ProductInfo(39, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(59, 44, "Argoland", my_set));
my_set = new Set();
my_set.add(new ProductInfo(21, 23, 20, "Woda"));
my_set.add(new ProductInfo(5, 85, 79, "Proteańskie dyski"));
my_set.add(new ProductInfo(10, 73, 66, "Murkwie"));
my_set.add(new ProductInfo(19, 34, 31, "Unobtainium"));
my_set.add(new ProductInfo(30, 19, 17, "Nuka-Cola"));
my_set.add(new ProductInfo(55, 9, 8, "Cynamon"));
my_set.add(new ProductInfo(8, 99, 95, "Ziemniaki"));
my_set.add(new ProductInfo(34, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(39, 31, "Sur\'Kesh", my_set));
my_set = new Set();
my_set.add(new ProductInfo(12, 29, 25, "Woda"));
my_set.add(new ProductInfo(8, 97, 84, "Murkwie"));
my_set.add(new ProductInfo(19, 44, 41, "Unobtainium"));
my_set.add(new ProductInfo(14, 37, 34, "Złoto"));
my_set.add(new ProductInfo(32, 20, 19, "Nuka-Cola"));
my_set.add(new ProductInfo(70, 10, 10, "Cynamon"));
my_set.add(new ProductInfo(6, 123, 103, "Ziemniaki"));
my_set.add(new ProductInfo(43, 6, 5, "Lyrium"));
global_info.planets.add(new Planet(36, 84, "Tairia", my_set));
my_set = new Set();
my_set.add(new ProductInfo(42, 12, 11, "Dwimeryt"));
my_set.add(new ProductInfo(22, 19, 18, "Woda"));
my_set.add(new ProductInfo(23, 33, 31, "Unobtainium"));
my_set.add(new ProductInfo(5, 76, 69, "Proteańskie dyski"));
my_set.add(new ProductInfo(12, 19, 17, "Złoto"));
my_set.add(new ProductInfo(34, 13, 12, "Nuka-Cola"));
my_set.add(new ProductInfo(74, 6, 6, "Cynamon"));
my_set.add(new ProductInfo(10, 92, 86, "Ziemniaki"));
global_info.planets.add(new Planet(15, 32, "Alderaan", my_set));
my_set = new Set();
my_set.add(new ProductInfo(12, 32, 32, "Woda"));
my_set.add(new ProductInfo(56, 10, 10, "Dwimeryt"));
my_set.add(new ProductInfo(13, 39, 37, "Unobtainium"));
my_set.add(new ProductInfo(6, 88, 76, "Murkwie"));
my_set.add(new ProductInfo(9, 103, 90, "Proteańskie dyski"));
my_set.add(new ProductInfo(26, 40, 35, "Złoto"));
my_set.add(new ProductInfo(35, 17, 16, "Nuka-Cola"));
my_set.add(new ProductInfo(59, 6, 5, "Cynamon"));
my_set.add(new ProductInfo(6, 60, 57, "Ziemniaki"));
my_set.add(new ProductInfo(51, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(91, 32, "Encja", my_set));
my_set = new Set();
my_set.add(new ProductInfo(38, 8, 8, "Dwimeryt"));
my_set.add(new ProductInfo(11, 30, 26, "Unobtainium"));
my_set.add(new ProductInfo(6, 91, 84, "Murkwie"));
my_set.add(new ProductInfo(10, 74, 66, "Proteańskie dyski"));
my_set.add(new ProductInfo(19, 37, 33, "Złoto"));
my_set.add(new ProductInfo(12, 71, 66, "Ziemniaki"));
my_set.add(new ProductInfo(63, 8, 7, "Lyrium"));
global_info.planets.add(new Planet(43, 69, "Corellia", my_set));
my_set = new Set();
my_set.add(new ProductInfo(15, 30, 28, "Woda"));
my_set.add(new ProductInfo(80, 6, 6, "Dwimeryt"));
my_set.add(new ProductInfo(12, 41, 39, "Unobtainium"));
my_set.add(new ProductInfo(4, 73, 67, "Murkwie"));
my_set.add(new ProductInfo(8, 39, 37, "Proteańskie dyski"));
my_set.add(new ProductInfo(16, 20, 18, "Złoto"));
my_set.add(new ProductInfo(30, 17, 14, "Nuka-Cola"));
my_set.add(new ProductInfo(33, 11, 10, "Cynamon"));
my_set.add(new ProductInfo(6, 74, 64, "Ziemniaki"));
my_set.add(new ProductInfo(64, 8, 7, "Lyrium"));
global_info.planets.add(new Planet(91, 71, "Ksi", my_set));
my_set = new Set();
my_set.add(new ProductInfo(85, 8, 7, "Dwimeryt"));
my_set.add(new ProductInfo(25, 43, 39, "Woda"));
my_set.add(new ProductInfo(9, 102, 94, "Proteańskie dyski"));
my_set.add(new ProductInfo(16, 35, 31, "Złoto"));
my_set.add(new ProductInfo(80, 6, 6, "Cynamon"));
my_set.add(new ProductInfo(8, 92, 82, "Ziemniaki"));
my_set.add(new ProductInfo(41, 10, 9, "Lyrium"));
global_info.planets.add(new Planet(75, 76, "Gaia", my_set));
my_set = new Set();
my_set.add(new ProductInfo(12, 25, 21, "Woda"));
my_set.add(new ProductInfo(7, 64, 57, "Proteańskie dyski"));
my_set.add(new ProductInfo(6, 89, 76, "Murkwie"));
my_set.add(new ProductInfo(12, 36, 33, "Unobtainium"));
my_set.add(new ProductInfo(16, 23, 21, "Złoto"));
my_set.add(new ProductInfo(25, 16, 15, "Nuka-Cola"));
my_set.add(new ProductInfo(59, 8, 7, "Cynamon"));
my_set.add(new ProductInfo(9, 120, 107, "Ziemniaki"));
my_set.add(new ProductInfo(53, 10, 8, "Lyrium"));
global_info.planets.add(new Planet(81, 34, "Arrakis", my_set));
function showAll() {
    var e_3, _a, e_4, _b;
    try {
        for (var _c = __values(global_info.planets), _d = _c.next(); !_d.done; _d = _c.next()) {
            var item = _d.value;
            console.log(item.name);
            try {
                for (var _e = __values(item.products), _f = _e.next(); !_f.done; _f = _e.next()) {
                    var item2 = _f.value;
                    console.log(item2.name);
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
    }
    catch (e_3_1) { e_3 = { error: e_3_1 }; }
    finally {
        try {
            if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
        }
        finally { if (e_3) throw e_3.error; }
    }
}
//showAll();
//console.log(global_info.ships.size);
var global_zindex = 1;
function showPlanet(text) {
    var popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
        popup.style.zIndex = (global_zindex + 1).toString();
        global_zindex++;
    }
    else {
        console.log("Wrong id in showPlanet" + text);
    }
}
function showShip(text) {
    var popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
        popup.style.zIndex = (global_zindex + 1).toString();
        global_zindex++;
    }
    else {
        console.log("Wrong id in showShipTravel");
    }
}
function updateAccount(value) {
    document.getElementById("account").innerHTML = "Your account value: " + value.toString();
}
function sanitazeString(value) {
    value = value.replace(/'/g, "\\'");
    return value.replace(/"/g, '\\"');
}
function updateCargoTable(name, cargo, how_much_added) {
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + " table");
    if (element != null) {
        var row = element.rows;
        for (var j = 0, col = void 0; col = row.item(j); j++) {
            //  console.log(col.cells[0].innerText);
            //  console.log(cargo);
            if (col.cells[0].innerText === cargo) {
                //  console.log("there");
                col.cells[1].innerText = (Number(col.cells[1].innerText) + how_much_added).toString();
                return;
            }
        }
        var newRow = element.insertRow(-1);
        var newCell = newRow.insertCell(0);
        var newCell2 = newRow.insertCell(1);
        newCell.innerHTML = cargo;
        newCell2.innerHTML = how_much_added.toString();
    }
}
function findPlanet(name) {
    var e_5, _a;
    try {
        for (var _b = __values(global_info.planets), _c = _b.next(); !_c.done; _c = _b.next()) {
            var planet = _c.value;
            if (planet.name == name)
                return planet;
        }
    }
    catch (e_5_1) { e_5 = { error: e_5_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_5) throw e_5.error; }
    }
    return null;
}
function findShip(name) {
    var e_6, _a;
    try {
        for (var _b = __values(global_info.ships), _c = _b.next(); !_c.done; _c = _b.next()) {
            var ship = _c.value;
            if (ship.name == name)
                return ship;
        }
    }
    catch (e_6_1) { e_6 = { error: e_6_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_6) throw e_6.error; }
    }
    return null;
}
function updateGlobalInfo(planet_name, cargo_name, how_much_changed, ship) {
    ship.current_cargo += how_much_changed;
    var old_value = ship.products.has(cargo_name) ? ship.products.get(cargo_name) : 0;
    ship.products.set(cargo_name, old_value + how_much_changed);
}
function updatePlanetCargoTable(planet_name, how_much_changed, cargo_name) {
    planet_name = sanitazeString(planet_name);
    var element = document.querySelector("#" + planet_name + " table");
    if (element != null) {
        //  console.log("HERE");
        var row = element.rows;
        //   console.log(row.length);
        for (var j = 0, col = void 0; col = row.item(j); j++) {
            // console.log(col.cells[0].innerHTML + " lol");
            if (col.cells[0].innerHTML == cargo_name) {
                //console.log("here");
                col.cells[1].innerHTML = (Number(col.cells[1].innerHTML) + how_much_changed).toString();
                return;
            }
        }
    }
}
function OptionExists(element, option_name) {
    for (var i = 0; i < element.length; i++) {
        if (element.options[i].text == option_name) {
            return true;
        }
    }
    return false;
}
function updateSelect(ship_name, cargo_name) {
    ship_name = sanitazeString(ship_name);
    var element = document.querySelector("#" + ship_name + "_sell " + "select");
    if (!OptionExists(element, cargo_name)) {
        var newElement = document.createElement('option');
        newElement.value = cargo_name;
        newElement.innerHTML = cargo_name;
        element.appendChild(newElement);
    }
}
exports.updateSelect = updateSelect;
function updateCargoSize(ship_name, how_much_changed) {
    ship_name = sanitazeString(ship_name);
    var element = document.querySelector("#" + ship_name + " .current_cargo_size");
    element.innerHTML = "Current cargo size: " + (Number(element.innerHTML.replace(/\D/g, "")) + how_much_changed).toString();
}
function shipBuy(name) {
    var e_7, _a, e_8, _b;
    name = sanitazeString(name);
    console.log("LOL");
    var element = document.querySelector("#" + name + "_buy " + "select");
    var element2 = document.querySelector("#" + name + "_buy " + "input[name='quantity'");
    if (element != null && element2 != null) {
        var how_much = Number(element2.value);
        var my_planet = null;
        var this_ship = null;
        try {
            for (var _c = __values(global_info.ships), _d = _c.next(); !_d.done; _d = _c.next()) {
                var ships = _d.value;
                //console.log(ships.name);
                if (ships.name == name) {
                    my_planet = ships.planet;
                    this_ship = ships;
                }
            }
        }
        catch (e_7_1) { e_7 = { error: e_7_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_7) throw e_7.error; }
        }
        try {
            for (var _e = __values(global_info.planets), _f = _e.next(); !_f.done; _f = _e.next()) {
                var planets = _f.value;
                if (my_planet == planets.name && (this_ship.cargo_size - this_ship.current_cargo) >= how_much && how_much > 0) {
                    var result_1 = planets.sell(element.value, how_much, account_value);
                    if (result_1 != -1) {
                        updateGlobalInfo(planets.name, element.value, how_much, this_ship);
                        account_value -= result_1;
                        updateAccount(account_value);
                        updateCargoTable(name, element.value, how_much);
                        updatePlanetCargoTable(planets.name, -how_much, element.value);
                        updateSelect(this_ship.name, element.value);
                        updateCargoSize(this_ship.name, how_much);
                    }
                    else {
                        alert("Error");
                    }
                }
                else if (my_planet == planets.name) {
                    alert("Error");
                }
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_8) throw e_8.error; }
        }
    }
}
function showMap(ship) {
    var e_9, _a;
    try {
        for (var _b = __values(ship.products), _c = _b.next(); !_c.done; _c = _b.next()) {
            var _d = __read(_c.value, 2), keys = _d[0], values = _d[1];
            console.log(keys + ": " + values.toString());
        }
    }
    catch (e_9_1) { e_9 = { error: e_9_1 }; }
    finally {
        try {
            if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
        }
        finally { if (e_9) throw e_9.error; }
    }
}
function shipSell(name) {
    var e_10, _a, e_11, _b;
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + "_sell " + "select");
    var element2 = document.querySelector("#" + name + "_sell " + "input[name='quantity'");
    if (element != null && element2 != null) {
        var how_much = Number(element2.value);
        var my_planet = null;
        var this_ship = null;
        try {
            for (var _c = __values(global_info.ships), _d = _c.next(); !_d.done; _d = _c.next()) {
                var ships = _d.value;
                //console.log(ships.name);
                if (ships.name == name) {
                    my_planet = ships.planet;
                    this_ship = ships;
                }
            }
        }
        catch (e_10_1) { e_10 = { error: e_10_1 }; }
        finally {
            try {
                if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
            }
            finally { if (e_10) throw e_10.error; }
        }
        // showMap(this_ship);
        var current_value = this_ship.products.get(element.value);
        try {
            for (var _e = __values(global_info.planets), _f = _e.next(); !_f.done; _f = _e.next()) {
                var planets = _f.value;
                if (my_planet == planets.name && current_value >= how_much) {
                    var result_2 = planets.buy(element.value, how_much);
                    if (result_2 != -1) {
                        //console.log(element.value);
                        //console.log(this_ship.products.get(element.value));
                        //  this_ship.products.set(element.value, current_value - how_much);
                        //console.log(this_ship.products.get(element.value));
                        // showMap(this_ship);
                        updateGlobalInfo(planets.name, element.value, -how_much, this_ship);
                        account_value += result_2;
                        updateAccount(account_value);
                        updateCargoTable(name, element.value, -how_much);
                        updatePlanetCargoTable(planets.name, how_much, element.value);
                        updateCargoSize(this_ship.name, -how_much);
                    }
                    else {
                        alert("Error");
                    }
                }
                else if (my_planet == planets.name) {
                    alert("Error");
                }
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_f && !_f.done && (_b = _e.return)) _b.call(_e);
            }
            finally { if (e_11) throw e_11.error; }
        }
    }
}
function changeHide(name) {
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + " .form_div");
    if (element != null) {
        element.classList.toggle("hide");
    }
}
function changeShipTable(name, message) {
    var element = document.getElementById("ships_table");
    if (element != null) {
        var rows = element.rows;
        for (var i = 0, cel = void 0; cel = rows.item(i); i++) {
            if (cel.cells[0].innerText == name) {
                cel.cells[1].innerText = message;
                return;
            }
        }
    }
}
function LOL() {
}
function deleteTimer(name) {
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + " .timer");
    element.remove();
}
function addShipToTable(ship_name, planet_name) {
    var element = document.querySelector("#" + planet_name + " .right_table");
    var row = element.insertRow(-1);
    var newCell = row.insertCell(0);
    var newElement = document.createElement('div');
    newElement.classList.add("popup");
    newElement.onclick = function (event) { showShip(ship_name); };
    newElement.innerText = ship_name;
    newCell.appendChild(newElement);
}
function removeShipFromTable(ship_name, planet_name) {
    var element = document.querySelector("#" + planet_name + " .right_table");
    var row = element.rows;
    console.log(ship_name);
    console.log(row.length);
    for (var i = 0, cel = void 0; cel = row.item(i); i++) {
        if (cel.cells[0].textContent.replace(/\s/g, '') == ship_name) {
            console.log("here");
            element.deleteRow(i);
            return;
        }
    }
}
function changeLocation(name, message, ship) {
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + " .location");
    element.innerHTML = message;
    element.onclick = function (test) { showPlanet(ship.planet); };
}
function Arrive(name) {
    var my_ship = findShip(name);
    changeHide(name);
    changeShipTable(name, my_ship.planet);
    deleteTimer(name);
    changeLocation(name, "Current location: " + my_ship.planet, my_ship);
    addShipToTable(my_ship.name, my_ship.planet);
}
function addTimeout(name, how_long, startDate) {
    var element = document.getElementById(name);
    var newTimer = document.createElement('div');
    newTimer.classList.add("timer");
    element.append(newTimer);
    var my_interval = setInterval(function () {
        var now = new Date().getTime();
        var distance = Math.ceil((startDate - now + how_long * 1000) / 1000);
        document.querySelector("#" + name + " .timer").innerHTML = "Time to finish travel: " + distance.toString();
        if (distance == 0) {
            clearInterval(my_interval);
            Arrive(name);
        }
    }, 1000);
}
function setTravel(ship_name, destination) {
}
function shipTravel(name) {
    name = sanitazeString(name);
    var element = document.querySelector("#" + name + "_travel " + "select");
    var my_ship = findShip(name);
    if (my_ship.planet == element.value) {
        alert("Error");
    }
    else {
        var destination_planet = findPlanet(element.value);
        var my_planet = findPlanet(my_ship.planet);
        var duration = my_planet.distance(destination_planet.x_coord, destination_planet.y_coord);
        removeShipFromTable(my_ship.name, my_ship.planet);
        my_ship.planet = element.value;
        changeShipTable(name, "In travel");
        changeHide(name);
        changeLocation(name, "Current location: In travel", my_ship);
        addTimeout(name, duration, new Date().getTime());
    }
}
function formTest() {
    console.log("LOL");
}
function showShipTravel(text) {
    var popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
    }
    else {
        console.log("Wrong id in showShipTravel");
    }
}
exports.showShipTravel = showShipTravel;
/*let startTime = new Date().getTime();
const gameDuration = 10 * 1000;
let player_name = new URL(window.location.href).searchParams.get("nickname");
(document.getElementById("time") as HTMLElement).innerHTML = "left time: " + gameDuration / 1000;


function insertName() {
    (document.getElementById("name") as HTMLElement).innerHTML = "Player name: " + player_name;
}

let test_result = 100;
function finish() {
    window.localStorage.setItem(player_name + "/" + account_value.toString(), account_value.toString());
      window.location.href = "finish.html?" + "result=" + account_value.toString();
}
insertName();
let interval = setInterval(() => {
    let now = new Date().getTime();
    var distance = Math.ceil((gameDuration - (now - startTime)) / 1000);
    (document.getElementById("time") as HTMLElement).innerHTML = "left time: " + distance;
    if (distance == 0) {
        clearInterval(interval);
        finish();
    }
}, 1000);*/
