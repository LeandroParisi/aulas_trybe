#  python3 -m pip install parsel

import requests
from parsel import Selector

website = "http://books.toscrape.com"
response = requests.get(website)
# print(response.text)
selector = Selector(text=response.text)
book_images = selector.css("img.thumbnail").getall()

first_book_url = selector.css("div.image_container a::attr(href)").get()

thumbnail_request = requests.get(f"{website}{first_book_url}")
thumbnail_selector = Selector(text=thumbnail_request.text)
book_title = thumbnail_selector.css("div.product_main h1")
print(book_title)


# Pagination:

# ...
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".price_color::text").get()
#     print(title, price)

# Existe uma classe next, que podemos recuperar a url através do seu elemento âncora
next_page_url = selector.css(".next a::attr(href)").get()
print(next_page_url)


# final version:

from parsel import Selector
import requests


# Define a primeira página como próxima a ter seu conteúdo recuperado
URL_BASE = "http://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"
while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(URL_BASE + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".price_color::text").get()
        print(title, price)
    # Descobre qual é a próxima página
    next_page_url = selector.css(".next a::attr(href)").get()
