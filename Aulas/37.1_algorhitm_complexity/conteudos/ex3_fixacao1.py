# Exercício 1: Qual a Ordem de Complexidade (complexidade de tempo) do algoritmo abaixo? E a complexidade de espaço?


def multiply_array(numbers):
    result = 0
    for number in numbers:
        result *= number

    return result


time_complexity = "0(n)"
memory_complexity = "0(1)"
