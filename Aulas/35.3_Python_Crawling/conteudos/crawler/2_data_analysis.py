#  python3 -m pip install parsel

import requests
from parsel import Selector

response = requests.get("http://books.toscrape.com")
print(response.text)
selector = Selector(text=response.text)
