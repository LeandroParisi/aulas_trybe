inputed_numbers = input("Digite diversos valores separados por ESPAÇO: ")

splitted_numbers = inputed_numbers.split(" ")

sum = 0

for number in splitted_numbers:
    if not number.isdigit():
        print(f"Não funfou {number} não é um dígito")
    else:
        sum += int(number)

print(f"A soma dos valores válidos é {sum}")
