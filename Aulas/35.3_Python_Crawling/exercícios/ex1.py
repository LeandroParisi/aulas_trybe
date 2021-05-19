# Exercício 1 Faça uma requisição ao
# site https://httpbin.org/encoding/utf8 e exiba seu conteúdo de forma legível.

import requests
import parsel

request_url = "https://httpbin.org/encoding/utf8"

response = requests.get(request_url)

print(response.text)
