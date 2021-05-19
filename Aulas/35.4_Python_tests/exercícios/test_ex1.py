from ex1 import fizz_buzz


def test_fizz_buzz_should_return_list_of_numbers():
    assert fizz_buzz(2) == [1, 2]


def test_fizz_buzz_should_return_fizz_for_divisible_by_three():
    assert fizz_buzz(3)[-1] == "Fizz"


def test_fizz_buzz_should_return_buzz_for_divisible_by_five():
    assert fizz_buzz(5)[-1] == "Buzz"


def test_fizz_buzz_should_return_fizzbuzz_for_divisible_by_five_and_three():
    assert fizz_buzz(15)[-1] == "FizzBuzz"
