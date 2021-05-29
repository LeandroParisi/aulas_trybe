# Exercício 7: Em um sistema de compras online, temos um código que efetua a compra do pedido. Este código possui code smells e precisa ser refatorado. Qual é o code smell ? Efetue a refatoração do código.


class CreditCard:
    def __init__(self, name, number, month, year, code):
        self._name = name
        self._number = number
        self._month = month
        self._year = year
        self._code = code


class Order:
    def __init__(self, items, credit_card):
        self.items = items
        self.credit_card = credit_card
