# começo = [0, 1]
#  + 1 = 1 -> [0, 1, 1]
#  + 1 = 2 -> [0, 1, 1, 2]
#  + 2 = 3 -> [0, 1, 1, 2, 3]
#  + 2 = 5 -> [0, 1, 1, 2, 3, 5]


def get_fibonnaci_number(position_to_return):
    fibonnaci_sequence = [0, 1]
    for index in range(len(fibonnaci_sequence), position_to_return):
        next_number = (
            fibonnaci_sequence[index - 2] + fibonnaci_sequence[index - 1]
        )
        fibonnaci_sequence.append(next_number)
    print(fibonnaci_sequence)
    print(fibonnaci_sequence[position_to_return - 1])


get_fibonnaci_number(9)

# Solução recursiva


def fibonacci(n):
    if n < 2:
        return n
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
