def count_even_numbers_from_1_to(limit_number):
    counter = 0
    for number in range(1, limit_number + 1):
        if number % 2 == 0:
            counter += 1
    return counter


assert count_even_numbers_from_1_to(2) == 1
assert count_even_numbers_from_1_to(4) == 2
assert count_even_numbers_from_1_to(6) == 3
assert count_even_numbers_from_1_to(20) == 10

print(count_even_numbers_from_1_to(20))
