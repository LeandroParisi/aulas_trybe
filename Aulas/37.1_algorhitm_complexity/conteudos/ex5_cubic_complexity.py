import datetime


def multiply_arrays(array1, array2, array3):
    starts_at = datetime.datetime.now()

    result = []
    number_of_iterations = 0

    for number1 in array1:
        print(f"Array 1: {number1}")
        for number2 in array2:
            print(f"Array 2: {number2}")
            for number3 in array3:
                result.append(number1 * number2 * number3)
                number_of_iterations += 1

    print(f"{number_of_iterations} iterações!")
    ends_at = datetime.datetime.now()

    print(f"started at {starts_at} // ended at {ends_at}")
    print(f"time spawn {ends_at - starts_at}")

    return result


meu_array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
# meu_array = [1, 2, 3, 4, 5]

multiply_arrays(meu_array, meu_array, meu_array)
