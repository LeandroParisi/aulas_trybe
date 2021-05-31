# Número passado por parâmetro à função: 4

# Execução: 4 + 3 + 2 + 1

# Resultado: 10


def recursive_sum(number):
    if number == 1:
        return 1
    else:
        return number + recursive_sum(number - 1)


print(recursive_sum(4))
