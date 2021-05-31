def get_major_number(numbers_list):
    if not numbers_list:
        return 0
    if len(numbers_list) == 1:
        return numbers_list[0]
    if len(numbers_list) == 2:
        if numbers_list[0] > numbers_list[1]:
            return numbers_list[0]
        else:
            return numbers_list[1]
    if len(numbers_list) == 3:
