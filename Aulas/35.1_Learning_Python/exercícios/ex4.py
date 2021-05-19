def major_string(strings):
    strings_size = {}
    for string in strings:
        strings_size[string] = len(string)
    print(strings_size)


major_string(["eu", "euzinho", "euzao", "eu mesmo"])
