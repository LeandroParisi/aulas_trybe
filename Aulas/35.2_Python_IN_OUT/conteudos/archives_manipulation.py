# escrita
file = open("arquivo.txt", mode="w")
file.write("Trybe S2")
file.close()

# leitura
file = open("arquivo.txt", mode="r")
content = file.read()
print(content)
file.close()  # não podemos esquecer de fechar o arquivo

# https://app.betrybe.com/course/computer-science/introducao-a-python-e-raspagem-de-dados-da-web/entrada-e-saida-de-dados/105dc022-72fa-425f-a452-29b3595bb64d/conteudos/5b4444bf-8fd7-4ecc-99d7-8584d0d1bb7d/manipulacao-de-arquivos/4e056036-508c-453a-adb6-69f3ca7e4cd1?use_case=side_bar
