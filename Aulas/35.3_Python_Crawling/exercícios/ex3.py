# Exercício 3 Às vezes, você precisa fazer com que o seu raspador da Web pareça estar fazendo solicitações HTTP como o navegador,
# para que o servidor retorne os mesmos dados que você vê no seu navegador. Faça uma requisição a https://scrapethissite.com/pages/advanced/?gotcha=headers e verifique se foi bem sucedido.
# Para verificar se foi bem sucedido, faça assert "bot detected" not in response.text , se nada acontecer, seu código está funcionando.
# 🦜 Faça a inspeção de como a requisição é feita pelo navegador para conseguir replicar através do código.

import requests

request_url = "https://scrapethissite.com/pages/advanced/?gotcha=headers"
headers = {"User-agent": "Mozilla", "Accept": "text/html"}
scrape_site = requests.get(request_url, headers=headers)

assert ("bot detected") not in scrape_site.text
print(scrape_site)
