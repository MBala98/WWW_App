

let account_value = 1984;
//(document.getElementById("time") as HTMLElement).innerHTML = "left time: " + gameDuration / 1000;


type Product = string;

export class ProductInfo {
    available: number;
    buy_price: number;
    sell_price: number;
    name: Product;
    constructor(available: number, buy_price: number, sell_price: number, name: Product) {
        this.available = available;
        this.buy_price = buy_price;
        this.sell_price = sell_price;
        this.name = name;
    }
}


export class Planet {
    x_coord: number;
    y_coord: number;
    name: string;
    products: Set<ProductInfo>;

    constructor(x_coord: number, y_coord: number, name: string, products: Set<ProductInfo>) {
        this.x_coord = x_coord;
        this.y_coord = y_coord;
        this.name = name;
        this.products = products;
    }

    distance(new_x: number, new_y: number): number {
        let a = Math.abs(this.x_coord - new_x);
        a *= a;
        let b = Math.abs(this.y_coord - new_y);
        b *= b;
        return Math.ceil(Math.sqrt(a + b));
    }

    sell(product_name: string, quantity: number, credits: number): number {
        for (let item of this.products) {
            if (item.name == product_name && item.available >= quantity && item.sell_price * quantity <= credits) {
                item.available -= quantity;
                return item.buy_price * quantity;
            }
        }
        return -1;
    }

    buy(product_name: string, quantity: number): number {
        for (let item of this.products) {
            if (item.name == product_name) {
                item.available += quantity;
                return item.sell_price * quantity;
            }
        }
        return -1;
    }


}
class Starship {
    name: string;
    products: Map<Product, number>;
    cargo_size: number;
    planet: string;
    current_cargo: number;

    constructor(name: string, cargo_size: number, planet: string) {
        this.name = name;
        this.cargo_size = cargo_size;
        this.planet = planet;
        this.products = new Map<Product, number>();
        this.current_cargo = 0;
    }

}

class GlobalInfo {
    planets: Set<Planet>;
    ships: Set<Starship>;

    constructor() {
        this.planets = new Set<Planet>();
        this.ships = new Set<Starship>();
    }
}

let global_info: GlobalInfo = new GlobalInfo();
let ship_set = new Set<Starship>();
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

let my_set = new Set<ProductInfo>();
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
my_set = new Set<ProductInfo>();
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
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(22, 9, 9, "Dwimeryt"));
my_set.add(new ProductInfo(9, 67, 66, "Murkwie"));
my_set.add(new ProductInfo(9, 82, 71, "Proteańskie dyski"));
my_set.add(new ProductInfo(17, 28, 24, "Złoto"));
my_set.add(new ProductInfo(27, 18, 16, "Nuka-Cola"));
my_set.add(new ProductInfo(62, 8, 7, "Cynamon"));
my_set.add(new ProductInfo(4, 74, 63, "Ziemniaki"));
global_info.planets.add(new Planet(35, 41, "NowWhat", my_set));
my_set = new Set<ProductInfo>();
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
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(106, 8, 7, "Dwimeryt"));
my_set.add(new ProductInfo(7, 82, 75, "Murkwie"));
my_set.add(new ProductInfo(21, 37, 36, "Unobtainium"));
my_set.add(new ProductInfo(13, 38, 32, "Złoto"));
my_set.add(new ProductInfo(30, 18, 17, "Nuka-Cola"));
my_set.add(new ProductInfo(58, 8, 7, "Cynamon"));
my_set.add(new ProductInfo(6, 77, 69, "Ziemniaki"));
my_set.add(new ProductInfo(31, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(94, 24, "Ziemia", my_set));
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(23, 10, 10, "Dwimeryt"));
my_set.add(new ProductInfo(5, 73, 64, "Murkwie"));
my_set.add(new ProductInfo(10, 75, 65, "Proteańskie dyski"));
my_set.add(new ProductInfo(12, 34, 30, "Złoto"));
my_set.add(new ProductInfo(25, 22, 19, "Nuka-Cola"));
my_set.add(new ProductInfo(6, 69, 61, "Ziemniaki"));
my_set.add(new ProductInfo(39, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(59, 44, "Argoland", my_set));
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(21, 23, 20, "Woda"));
my_set.add(new ProductInfo(5, 85, 79, "Proteańskie dyski"));
my_set.add(new ProductInfo(10, 73, 66, "Murkwie"));
my_set.add(new ProductInfo(19, 34, 31, "Unobtainium"));
my_set.add(new ProductInfo(30, 19, 17, "Nuka-Cola"));
my_set.add(new ProductInfo(55, 9, 8, "Cynamon"));
my_set.add(new ProductInfo(8, 99, 95, "Ziemniaki"));
my_set.add(new ProductInfo(34, 9, 8, "Lyrium"));
global_info.planets.add(new Planet(39, 31, "Sur\'Kesh", my_set));
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(12, 29, 25, "Woda"));
my_set.add(new ProductInfo(8, 97, 84, "Murkwie"));
my_set.add(new ProductInfo(19, 44, 41, "Unobtainium"));
my_set.add(new ProductInfo(14, 37, 34, "Złoto"));
my_set.add(new ProductInfo(32, 20, 19, "Nuka-Cola"));
my_set.add(new ProductInfo(70, 10, 10, "Cynamon"));
my_set.add(new ProductInfo(6, 123, 103, "Ziemniaki"));
my_set.add(new ProductInfo(43, 6, 5, "Lyrium"));
global_info.planets.add(new Planet(36, 84, "Tairia", my_set));
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(42, 12, 11, "Dwimeryt"));
my_set.add(new ProductInfo(22, 19, 18, "Woda"));
my_set.add(new ProductInfo(23, 33, 31, "Unobtainium"));
my_set.add(new ProductInfo(5, 76, 69, "Proteańskie dyski"));
my_set.add(new ProductInfo(12, 19, 17, "Złoto"));
my_set.add(new ProductInfo(34, 13, 12, "Nuka-Cola"));
my_set.add(new ProductInfo(74, 6, 6, "Cynamon"));
my_set.add(new ProductInfo(10, 92, 86, "Ziemniaki"));
global_info.planets.add(new Planet(15, 32, "Alderaan", my_set));
my_set = new Set<ProductInfo>();
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
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(38, 8, 8, "Dwimeryt"));
my_set.add(new ProductInfo(11, 30, 26, "Unobtainium"));
my_set.add(new ProductInfo(6, 91, 84, "Murkwie"));
my_set.add(new ProductInfo(10, 74, 66, "Proteańskie dyski"));
my_set.add(new ProductInfo(19, 37, 33, "Złoto"));
my_set.add(new ProductInfo(12, 71, 66, "Ziemniaki"));
my_set.add(new ProductInfo(63, 8, 7, "Lyrium"));
global_info.planets.add(new Planet(43, 69, "Corellia", my_set));
my_set = new Set<ProductInfo>();
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
my_set = new Set<ProductInfo>();
my_set.add(new ProductInfo(85, 8, 7, "Dwimeryt"));
my_set.add(new ProductInfo(25, 43, 39, "Woda"));
my_set.add(new ProductInfo(9, 102, 94, "Proteańskie dyski"));
my_set.add(new ProductInfo(16, 35, 31, "Złoto"));
my_set.add(new ProductInfo(80, 6, 6, "Cynamon"));
my_set.add(new ProductInfo(8, 92, 82, "Ziemniaki"));
my_set.add(new ProductInfo(41, 10, 9, "Lyrium"));
global_info.planets.add(new Planet(75, 76, "Gaia", my_set));
my_set = new Set<ProductInfo>();
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
    for (let item of global_info.planets) {
        console.log(item.name);
        for (let item2 of item.products) {
            console.log(item2.name);
        }
    }
}

//showAll();

//console.log(global_info.ships.size);


let global_zindex = 1;
function showPlanet(text: string) {
    let popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
        popup.style.zIndex = (global_zindex + 1).toString();
        global_zindex++;
    }
    else {
        console.log("Wrong id in showPlanet" + text);
    }
}

function showShip(text: string) {
    let popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
        popup.style.zIndex = (global_zindex + 1).toString();
        global_zindex++;
    }
    else {
        console.log("Wrong id in showShipTravel");
    }
}



function updateAccount(value: number) {
    (document.getElementById("account") as HTMLElement).innerHTML = "Your account value: " + value.toString();
}

function sanitazeString(value: string) {
    value = value.replace(/'/g, "\\'");
    return value.replace(/"/g, '\\"');
}
function updateCargoTable(name: string, cargo: string, how_much_added: number) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + " table") as HTMLTableElement;
    if (element != null) {
        let row = element.rows;
        for (let j = 0, col; col = row.item(j); j++) {
            //  console.log(col.cells[0].innerText);
            //  console.log(cargo);
            if (col.cells[0].innerText === cargo) {
                //  console.log("there");
                col.cells[1].innerText = (Number(col.cells[1].innerText) + how_much_added).toString();
                return;
            }
        }
        let newRow = element.insertRow(-1);
        let newCell = newRow.insertCell(0);
        let newCell2 = newRow.insertCell(1);
        newCell.innerHTML = cargo;
        newCell2.innerHTML = how_much_added.toString();
    }

}

function findPlanet(name: string): Planet {
    for (let planet of global_info.planets) {
        if (planet.name == name)
            return planet;
    }
    return null;
}


function findShip(name: string): Starship {
    for (let ship of global_info.ships) {
        if (ship.name == name)
            return ship;
    }
    return null;
}
function updateGlobalInfo(planet_name: string, cargo_name: string, how_much_changed: number, ship: Starship) {
    ship.current_cargo += how_much_changed;
    let old_value: number = ship.products.has(cargo_name) ? ship.products.get(cargo_name) : 0
    ship.products.set(cargo_name, old_value + how_much_changed);

}


function updatePlanetCargoTable(planet_name: string, how_much_changed: number, cargo_name: string) {
    planet_name = sanitazeString(planet_name);
    let element = document.querySelector("#" + planet_name + " table") as HTMLTableElement;
    if (element != null) {
        //  console.log("HERE");
        let row = element.rows;
        //   console.log(row.length);
        for (let j = 0, col; col = row.item(j); j++) {
            // console.log(col.cells[0].innerHTML + " lol");
            if (col.cells[0].innerHTML == cargo_name) {
                //console.log("here");
                col.cells[1].innerHTML = (Number(col.cells[1].innerHTML) + how_much_changed).toString();
                return;
            }
        }

    }
}

function OptionExists(element: HTMLSelectElement, option_name: string): boolean {
    for (let i = 0; i < element.length; i++) {
        if (element.options[i].text == option_name) {
            return true;
        }
    }
    return false;
}
export function updateSelect(ship_name: string, cargo_name: string) {
    ship_name = sanitazeString(ship_name);
    let element = document.querySelector("#" + ship_name + "_sell " + "select") as HTMLSelectElement;
    if (!OptionExists(element, cargo_name)) {
        let newElement = document.createElement('option');
        newElement.value = cargo_name;
        newElement.innerHTML = cargo_name;
        element.appendChild(newElement);
    }
}

function updateCargoSize(ship_name: string, how_much_changed: number) {
    ship_name = sanitazeString(ship_name);
    let element = document.querySelector("#" + ship_name + " .current_cargo_size") as HTMLElement;
    element.innerHTML = "Current cargo size: " + (Number(element.innerHTML.replace(/\D/g, "")) + how_much_changed).toString();
}

function shipBuy(name: string) {
    name = sanitazeString(name);
    console.log("LOL");
    let element = document.querySelector("#" + name + "_buy " + "select") as HTMLInputElement;
    let element2 = document.querySelector("#" + name + "_buy " + "input[name='quantity'") as HTMLInputElement;
    if (element != null && element2 != null) {
        let how_much: number = Number(element2.value);
        let my_planet: string = null;
        let this_ship = null;
        for (let ships of global_info.ships) {
            //console.log(ships.name);
            if (ships.name == name) {
                my_planet = ships.planet;
                this_ship = ships;
            }
        }
        for (let planets of global_info.planets) {
            if (my_planet == planets.name && (this_ship.cargo_size - this_ship.current_cargo) >= how_much && how_much > 0) {
                let result = planets.sell(element.value, how_much, account_value);
                if (result != -1) {
                    updateGlobalInfo(planets.name, element.value, how_much, this_ship);
                    account_value -= result;
                    updateAccount(account_value);
                    updateCargoTable(name, element.value, how_much);
                    updatePlanetCargoTable(planets.name, -how_much, element.value);
                    updateSelect(this_ship.name, element.value);
                    updateCargoSize(this_ship.name, how_much)
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
}


function showMap(ship: Starship) {
    for (let [keys, values] of ship.products) {
        console.log(keys + ": " + values.toString());
    }
}

function shipSell(name: string) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + "_sell " + "select") as HTMLInputElement;
    let element2 = document.querySelector("#" + name + "_sell " + "input[name='quantity'") as HTMLInputElement;
    if (element != null && element2 != null) {
        let how_much: number = Number(element2.value);
        let my_planet: string = null;
        let this_ship = null;
        for (let ships of global_info.ships) {
            //console.log(ships.name);
            if (ships.name == name) {
                my_planet = ships.planet;
                this_ship = ships;
            }
        }
        // showMap(this_ship);
        let current_value = this_ship.products.get(element.value);
        for (let planets of global_info.planets) {
            if (my_planet == planets.name && current_value >= how_much) {
                let result = planets.buy(element.value, how_much);
                if (result != -1) {
                    //console.log(element.value);
                    //console.log(this_ship.products.get(element.value));
                    //  this_ship.products.set(element.value, current_value - how_much);
                    //console.log(this_ship.products.get(element.value));
                    // showMap(this_ship);

                    updateGlobalInfo(planets.name, element.value, -how_much, this_ship);
                    account_value += result;
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
}

function changeHide(name: string) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + " .form_div") as HTMLElement;
    if (element != null) {
        element.classList.toggle("hide");
    }
}

function changeShipTable(name: string, message: string) {
    let element = document.getElementById("ships_table") as HTMLTableElement;
    if (element != null) {
        let rows = element.rows;
        for (let i = 0, cel; cel = rows.item(i); i++) {
            if (cel.cells[0].innerText == name) {
                cel.cells[1].innerText = message;
                return;
            }
        }
    }
}

function LOL() {

}
function deleteTimer(name: string) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + " .timer") as HTMLElement;
    element.remove();
}

function addShipToTable(ship_name: string, planet_name: string) {
    let element = document.querySelector("#" + planet_name + " .right_table") as HTMLTableElement;
    let row = element.insertRow(-1);
    let newCell = row.insertCell(0);
    let newElement = document.createElement('div');
    newElement.classList.add("popup");
    newElement.onclick = (event: MouseEvent) => { showShip(ship_name); }
    newElement.innerText = ship_name;
    newCell.appendChild(newElement);
}

function removeShipFromTable(ship_name: string, planet_name: string) {
    let element = document.querySelector("#" + planet_name + " .right_table") as HTMLTableElement;
    let row = element.rows;
    console.log(ship_name);
    console.log(row.length);
    for (let i = 0, cel; cel = row.item(i); i++) {
        if (cel.cells[0].textContent.replace(/\s/g, '') == ship_name) {
            console.log("here");
            element.deleteRow(i);
            return;
        }
    }
}
function changeLocation(name: string, message: string, ship: Starship) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + " .location") as HTMLElement;
    element.innerHTML = message;
    element.onclick = (test: MouseEvent) => { showPlanet(ship.planet); }
}

function Arrive(name: string) {
    let my_ship = findShip(name);
    changeHide(name);
    changeShipTable(name, my_ship.planet);
    deleteTimer(name);
    changeLocation(name, "Current location: " + my_ship.planet, my_ship);
    addShipToTable(my_ship.name, my_ship.planet);
}

function addTimeout(name: string, how_long: number, startDate: number) {
    let element = document.getElementById(name);
    let newTimer = document.createElement('div');
    newTimer.classList.add("timer");
    element.append(newTimer);
    let my_interval = setInterval(() => {
        let now = new Date().getTime();
        var distance = Math.ceil((startDate - now + how_long * 1000) / 1000);
        (document.querySelector("#" + name + " .timer") as HTMLElement).innerHTML = "Time to finish travel: " + distance.toString();
        if (distance == 0) {
            clearInterval(my_interval);
            Arrive(name);
        }
    }, 1000);
}
function setTravel(ship_name: string, destination: string) {

}
function shipTravel(name: string) {
    name = sanitazeString(name);
    let element = document.querySelector("#" + name + "_travel " + "select") as HTMLInputElement;
    let my_ship = findShip(name);
    if (my_ship.planet == element.value) {
        alert("Error");
    }
    else {
        let destination_planet = findPlanet(element.value);
        let my_planet = findPlanet(my_ship.planet);
        let duration = my_planet.distance(destination_planet.x_coord, destination_planet.y_coord);
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
export function showShipTravel(text: string) {
    let popup = document.getElementById(text);
    if (popup != null) {
        popup.classList.toggle("show");
    }
    else {
        console.log("Wrong id in showShipTravel");
    }
}


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
