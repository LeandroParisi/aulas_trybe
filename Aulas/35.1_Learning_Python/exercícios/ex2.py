def get_avg(values):
    total = 0
    for value in values:
        total += value
    total = total / len(values)
    print(total)
    return total / len(values)


get_avg([1, 2, 3, 5, 10])
