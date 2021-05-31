def reverse(list):
    reversed_list = []
    for item in list:
        reversed_list.insert(0, item)
    return reversed_list


# Solução recursiva:


def recursive_reverse(list):
    if len(list) < 2:
        return list
    else:
        return recursive_reverse(list[1:]) + [list[0]]
