import json
import urllib
from yattag import Doc

url = "https://www.mimuw.edu.pl/~ciebie/initial_data.json"
response = urllib.urlopen(url)

data = json.loads(response.read())
print(data["game_duration"])


doc, tag, text = Doc().tagtext()

for element in data["planets"]:
    with tag('div', klass='popuptext', id =element):
        with tag('div', klass='Title'):
            text(element)
        with tag('div', klass="coord_x"):
            text("Coordinate x: " + str(data["planets"][element]["x"]))
        with tag('div', klass="coord_y"):
            text("Coordinate y: " + str(data["planets"][element]["y"]))
        with tag('table', klass='my_tables left_table'):
            with tag('caption'):
                text('Available_items')
            with tag('tr'):
                with tag('th'):
                    text('Item')
                with tag('th'):
                    text('Available')
                with tag('th'):
                    text('Buy price')
                with tag('th'):
                    text('Sell price')
            for product in data["planets"][element]["available_items"]:
                with tag('tr'):
                    with tag('td'):
                        text(product)
                    with tag('td'):
                        text(data["planets"][element]["available_items"][product]["available"])
                    with tag('td'):
                         text(data["planets"][element]["available_items"][product]["buy_price"])
                    with tag('td'):
                          text(data["planets"][element]["available_items"][product]["sell_price"])
        with tag('table', klass='my_tables right_table'):
            with tag('caption'):
                text('Ships on this planet')
            with tag('tr'):
                with tag('th'):
                    text('Ships')
                for ships in data["starships"]:
                    if data["starships"][ships]["position"] == element:
                        with tag('tr'):
                            with tag('td'):
                                onclick_str = 'showShip(' + "'" +  ships + "'" + ')'
                                with tag('div', klass='popup', onclick=onclick_str):
                                    text(ships)
        onclick_planet_str = 'showPlanet(' + "'"  + element + "'" + ')'
        with tag('a', klass='close', onclick=onclick_planet_str, href="#"):
            text("&times")
        with tag('div', klass='image'):
            doc.stag('img', src="planeta2.png", alt="planeta")

                
            
            

print(doc.getvalue())


#print(data["planets"]["Ziemia"]["available_items"])

