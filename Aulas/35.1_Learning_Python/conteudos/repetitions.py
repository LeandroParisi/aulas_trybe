pantheon = [
  { 'name': 'Wynna', 'domain': 'Magic'},
  { 'name': 'Nymb', 'domain': 'Luck' },
  { 'name': 'Baldur', 'domain': 'Earth' }
]

domains = []

for god in pantheon:
  domains.append(god['domain'])

print(domains)

#####

gods = [god for god in pantheon if god['domain'] != 'Magic']

print(gods)

#####
# while
# 🔢 A Sequência de Fibonacci, muito presente em diversas formas na natureza, é uma sequência numérica começando por 0 e 1 e cada termo subsequente corresponde à soma dos dois anteriores.
# Podemos escrever esta sequência da seguinte maneira:

n = 10
last, next = 0, 1
while last < n:
    print(last)
    last, next = next, last + next
# 💡 Foi utilizado um truque neste exemplo que se chama atribuição múltipla. Isto é atribuição de vários valores a múltiplas variáveis ao mesmo tempo. Este truque pode ser utilizado também para fazer a troca de valores entre variáveis: a, b = b, a .