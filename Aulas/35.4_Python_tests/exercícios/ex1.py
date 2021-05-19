def fizz_buzz(max_number):
    fizz_buzzed_list = []
    for number in range(1, max_number + 1):
        if number % 3 == 0 and number % 5 == 0:
            fizz_buzzed_list.append("FizzBuzz")
        elif number % 5 == 0:
            fizz_buzzed_list.append("Buzz")
        elif number % 3 == 0:
            fizz_buzzed_list.append("Fizz")
        else:
            fizz_buzzed_list.append(number)
    return fizz_buzzed_list


print(fizz_buzz(10))
