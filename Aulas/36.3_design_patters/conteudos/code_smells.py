# Long Method : métodos grandes geralmente significam mais de uma responsabilidade em um mesmo trecho de código. Assim sendo, como regra métodos não podem ser muito longos;

# Large Class : classes grandes geralmente significam mais de uma responsabilidade. Assim sendo, como regra classes não podem ser muito grandes;

# Duplicate Code : códigos duplicados geralmente significam falta de abstração, ou seja, lógica repetida que poderia estar centralizada em uma única entidade compartilhada. Assim sendo, uma aplicação não pode ter trechos de código duplicados;

# Dead Code : se um código não está mais sendo utilizado, porque ainda está lá?

# Speculative Generality : quem nunca tentou adivinhar o futuro e tornou uma implementação mais complicada do que precisava? Essa aqui é extremamente comum de fazermos sem perceber!


# Middle man

# Exemplo:
# Temos uma plataforma onde a pessoa jogadora (Player) possui jogos (PlayerGame) e participa de torneios (Tournaments). Nesta plataforma temos um cliente que precisa consultar os torneios de poker de uma pessoa jogadora. Para fins desse exemplo utilizaremos a pessoa jogadora com id 1 e o jogo de poker que ela comprou também com id 1.


class Player:

    # ...

    def game(self, game_id):
        """Busca um jogo da pessoa através do seu id"""
        return PlayerGame.query.filter(
            game_id=game_id, user_id=self.id
        ).first()

    def tournaments(self, game_id):
        """Aqui estamos buscando pelos jogos de uma pessoa para encontrar
        seus torneios.

        Ou seja, usamos o middle man PlayerGame para encontrar o torneio.
        O que além de adicionar complexidade de código, adiciona uma consulta
        extra ao banco de dados.
        """
        return self.game(game_id).tournaments()


class PlayerGame:
    def tournaments(self):
        return Tournament.query.filter(game_id=self.game_id).all()


class Tournament:
    ...


######

# Solução


class Player:

    # ...

    def tournaments(self, game_id):
        """Aqui removemos o middle man PlayerGame da consulta,
        fazendo-a diretamente em Tournament.

        Com isso simplificamos o nosso código e removemos uma consulta.
        """
        return Tournament.query.filter(game_id=game_id, user_id=self.id).all()


class Tournament:
    ...


# Código cliente
player = Player(id=1)
print(player.tournaments(1))


# Código cliente
player = Player(id=1)
print(player.tournaments(1))

#####


# Data Clumps
# Ocorre quando um grupo de variáveis (como o endereço de entrega do exemplo que veremos abaixo) é passado junto como parâmetro em várias partes do programa. É indicativo de que esses grupos devem ser transformados em suas próprias classes.


# Exemplo:
# Imagine que você tem um aplicativo para uma hamburgueria local, que só faz entregas na própria cidade. Nesta plataforma queremos registrar uma pessoa com seu nome e endereço para facilitar as entregas.


class User:
    def __init__(self, name, street, number, district):
        """Você nunca vai passar a rua sem passar também o número e o bairro!"""
        self.name = name
        self.address_street = street
        self.address_number = number
        self.address_district = district


###

# Solução


class Address:
    def __init__(self, street, number, district):
        """As informações que nunca vem separadas são uma entidade separada agora."""
        self.street = street
        self.number = number
        self.district = district


class User:
    def __init__(self, name, address):
        self.name = name
        self.address = address
