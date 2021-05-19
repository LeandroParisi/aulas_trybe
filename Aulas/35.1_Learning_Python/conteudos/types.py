## NUMBERS
# int
a = 5
type(a)

# float
b = 5.0
type(b)

# complex -- https://www.tutorialspoint.com/complex-numbers-in-python
3 + 4j  # saída: (3+4j)
(3 + 4j) + 4  # saída: (7+4j)
c = 5j
type(c)

#####

## STRINGS
d = 'string'
type(d)

#####

## LIST -> entidades diferentes
# mutable and ordered list of elements
fruits = ['banana', 'apple']

fruits[0] # banana
fruits[1] # apple

fruits.append('orange') # [banana, apple, orange]

fruits.remove('orange') # [banana, apple]

more_fruits = ['tomato', 'pineapple']

fruits.extend(more_fruits) # [banana, apple, tomato, pineapple]

fruits.index("apple")  # retorna o índice onde a fruta está localizada, neste caso 1

fruits.sort()  # ordena a lista de frutas

#####

## TUPLE -> infos sobre uma mesma entidade -> IMMUTABLE -> can be key of a dict??
my_tuple = ('element1', 1)

#####

## Dict -> key, value
my_dict = { 'nome': 'Leandro', 'city': 'BH' }

my_dict.nome # não funfa, use:
my_dict['nome']

del people_by_id[1] # remover um conjunto de chave / valor
people_by_id.items()  # dict_items([(1, "Cássio"), (2, "João"), (3, "Felipe")])
# um conjunto é retornado com tuplas contendo chaves e valores

#####

## Sets -> conjuntos semanticos
brothers = { 'Leandro', 'Chris', 'Gui'}
works = { 'Leandro', 'Chris', 'Adotado' }
all_brothers = { 'Leandro', 'Chris', 'Gui', 'Adotado' }
others = { 'Fulano' }
brothers.intersection(works)
all_brothers.difference(brothers)
adds_all = all_brothers.union(others)

# ex.

permissions = {"member", "group"}  # elementos separados por vírgula, envolvidos por chaves

permissions.add("root")  # adiciona um novo elemento ao conjunto

permissions.add("member")  # como o elemento já existe, nenhum novo item é adicionado ao conjunto

permissions.union({"user"})  # retorna um conjunto resultado da união

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

#####

## FROZEN_SET
#Variação do set, porém imutável, ou seja, seus elementos não podem ser modificados durante a execução do programa.

permissions = frozenset(["member", "group"])  # assim como o set, qualquer estrutura iterável pode ser utilizada para criar um frozenset

permissions.union({"user"})  # novos conjuntos imutáveis podem ser criados à partir do original, mas o mesmo não pode ser modificado

permissions.intersection({"user", "member"})  # retorna um conjunto resultante da intersecção dos conjuntos

permissions.difference({"user"})  # retorna a diferença entre os dois conjuntos

#####

## RANGE

# vamos converter o range em uma lista para ajudar na visualização

# definimos somente o valor de parada
list(range(5))  # saída: [0, 1, 2, 3, 4]

# definimos o valor inicial e o de parada
list(range(1, 6))  # saída: [1, 2, 3, 4, 5]

# definimos valor inicial, de parada e modificamos o passo para 2
list(range(1, 11, 2))  # saída: [1, 3 ,5 ,7 , 9]

# podemos utilizar valores negativos para as entradas também
list(range(10, 0, -1))  # saída: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]


## Além dos tipos básicos, temos outros como datas, tuplas nomeadas, arrays, enumerações e outros, mas estes tem de ser importados de seus respectivos módulos.

