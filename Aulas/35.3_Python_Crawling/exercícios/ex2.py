# Exercício 2 Faça uma requisição ao recurso usuários da API do Github
# ( https://api.github.com/users ), exibindo o username e url de todos os usuários retornados.

import requests
from service.fetch_data import fetch_data

request_url = "https://api.github.com/users"

github_users = requests.get(request_url).json()

# print(github_users.text)

for user in github_users:
    print(f"{user['login']} {user['url']}")
