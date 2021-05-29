# Os arrays tem sempre o mesmo tamanho
def multiply_arrays(array1, array2):
    result = []
    for number1 in array1:
        for number2 in array2:
            result.append(number1 + number2)

    return result


# def multiply_array(numbers):
# ...

sum_array(array_com_dois_mil_numeros)
# O tempo de execução deste algoritmo foi 0.45s

sum_array(array_com_quatro_mil_numeros)
# Já esse teve tempo de execução de 1.8s, cerca de quatro vezes maior.
