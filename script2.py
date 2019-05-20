import json
import urllib
from yattag import Doc

url = "https://www.mimuw.edu.pl/~ciebie/initial_data.json"
response = urllib.urlopen(url)

data = json.loads(response.read())
print(data["game_duration"])


doc, tag, text = Doc().tagtext()

for ships in data["starships"]:
    with tag('div', klass='popuptext', id=ships):
        with tag('div', klass='Title'):
            text(ships)
        show_str = "showPlanet('" + data["starships"][ships]["position"] + "')"
        with tag('div', klass='location', onclick=show_str):
            text("Current location: " + data["starships"][ships]["position"])
        with tag('div', klass="max_cargo_size"):
            text("Max cargo size: " + str(data["starships"][ships]["cargo_hold_size"]))
        with tag('div', klass="current_cargo_size"):
            text("Current cargo size: " + "0")
        with tag('table', klass='my_tables left_table'):
            with tag('caption'):
                text("Cargo")
            with tag('tr'):
                with tag('th'):
                    text("Name")
                with tag('th'):
                    text("Availability")
        with tag('div', klass='form_div'):
            with tag('form'):
                id_ship = ships + "_sell"
                with tag('div', klass='form_content', id=id_ship):
                    text("Sell:")
                    with tag('select', name="sell"):
                        text("") 
                    with tag('input', type="number", name="quantity", min="1", max="5000000"):
                        text("")
                    onclick_str = "shipSell('" + ships + "')"
                    with tag('input', type="button", value="submit", onclick=onclick_str):
                        text("")
            with tag('form'):
                id_ship = ships + "_buy"
                with tag('div', klass='form_content', id=id_ship):
                    text("Buy:")
                    with tag('select', name="buy"):
                        for item in data["items"]:
                            for item_ship in data["planets"][data["starships"][ships]["position"]]["available_items"]:
                                if item == item_ship:
                                    with tag('option', value=item):
                                        text(item)
                    with tag('input', type="number", name="quantity", min="1", max="5000000"):
                        text("")
                    onclick_str = "shipBuy('" + ships + "')"
                    with tag('input', type="button", value="submit", onclick=onclick_str):
                        text("")
            with tag('form'):
                id_ship = ships + "_travel"
                with tag('div', klass='form_content', id=id_ship):
                    text("Travel:")
                    with tag('select', name="travel"):
                        for planet in data["planets"]:
                            with tag('option', value=planet):
                                text(planet)
                    onclick_str = "shipTravel('" + ships + "')"
                    with tag('input', type="button", value="submit", onclick=onclick_str):
                        text("")
        onclick_str = 'showShip(' + "'" + ships + "'" + ")"
        with tag('a', klass='close', onclick=onclick_str, href="#"):
            doc.asis('&times')
        with tag('div', klass="image"):
            doc.stag('img', src="space_ship.png", alt="planeta")

print(doc.getvalue()) 
