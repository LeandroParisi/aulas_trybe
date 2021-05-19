# Um segundo cenário é onde a função espera o nome de um arquivo e a abertura do mesmo acontece dentro da função.

import json


def retrieve_pokemons_by_type(type, filepath):
    with open(filepath) as file:
        pokemons = json.load(file)["results"]
        pokemons_by_type = [
            pokemon for pokemon in pokemons if type in pokemon["type"]
        ]
        return pokemons_by_type


# A primeira abordagem torna o código menos acoplado a um arquivo e nos permite utilizar qualquer objeto (que tenha o método reader) em seu lugar. Assim essa função pode ser reutilizável, por exemplo, para ler pokemons a partir de uma requisição web ou outra fonte.
# 💡 Testes de unidade são muito importantes, mas não se esqueça de testar também a integração de suas funções e a funcionalidade como um todo.
