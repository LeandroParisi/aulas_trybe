def count_even_numbers_from_1_to(number):
    if number == 0:
        return 0
    if number % 2 == 0:
        return 1 + count_even_numbers_from_1_to(number - 1)
    else:
        return count_even_numbers_from_1_to(number - 1)


print(count_even_numbers_from_1_to(10))
