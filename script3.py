import json
import urllib
from yattag import Doc

url = "https://www.mimuw.edu.pl/~ciebie/initial_data.json"
response = urllib.urlopen(url)

data = json.loads(response.read())

code = ""

for planet in data["planets"]:
    tmp = data["planets"][planet]["available_items"]
    tmp_code = "my_set = new Set<ProductInfo>();\n"
    for item in tmp:
        tmp_code += "my_set.add(new ProductInfo(" + str(tmp[item]["available"]) + ", " + str(tmp[item]["buy_price"]) + ", " + str(tmp[item]["sell_price"]) + ", " + '"' + item + '"));\n'
    code += tmp_code
    code += "global_info.planets.add(new Planet(" + str(data["planets"][planet]["x"]) + ", " + str(data["planets"][planet]["y"]) + ", " + '"' + planet + '", ' + "my_set));\n"
  
print(code)

print("\n")

code = ""
for ship in data["starships"]:
    code += "ship_set.add(new Starship(" + '"' + ship + '", ' + str(data["starships"][ship]["cargo_hold_size"]) + ", " + '"' + data["starships"][ship]["position"] + '"));\n'

print(code)
