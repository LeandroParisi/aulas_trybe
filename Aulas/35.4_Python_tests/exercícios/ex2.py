# Exercício 2 Em alguns lugares é comum lembrar um número do telefone associando seus dígitos a letras. Dessa maneira a expressão MY LOVE significa 69 5683. Claro que existem alguns problemas, uma vez que alguns números de telefone não formam uma palavra ou uma frase e os dígitos 1 e 0 não estão associados a nenhuma letra.
# Sua tarefa é ler uma expressão e encontrar o número de telefone correspondente baseado na tabela abaixo. Uma expressão é composta por letras maiúsculas (A-Z), hifens (-) e os números 1 e 0.

# Letras  ->  Número
# ABC     ->  2
# DEF     ->  3
# GHI     ->  4
# JKL     ->  5
# MNO     ->  6
# PQRS    ->  7
# TUV     ->  8
# WXYZ    ->  9

# Exemplo de entrada:
# 1-HOME-SWEET-HOME
# MY-MISERABLE-JOB

# Saídas correspondentes:
# 1-4663-79338-4663
# 69-647372253-562

# Curiosidade : A frase "The quick brown fox jumps over the lazy dog" é um pantograma (frase com sentido em que são usadas todas as letras do alfabeto de determinada língua) da língua inglesa.
# Verifique casos como entrada maior que 30 caracteres, vazia e com caracteres inválidos.


def extract_phone_number_from_expression(expression):
    codes = {
        "ABC": "2",
        "DEF": "3",
        "GHI": "4",
        "JKL": "5",
        "MNO": "6",
        "PQRS": "7",
        "TUV": "8",
        "WXYZ": "9",
    }
    codes_by_category = codes.items()

    extracted_phone = ""
    for charactere in expression:
        for (letters, respective_number) in codes_by_category:
            print(letters)
            print(charactere)
            print(charactere in letters)
            if charactere in letters:
                extracted_phone += respective_number
                print(extracted_phone)
                break
            elif charactere not in letters:
                extracted_phone += charactere
                break
                print(extracted_phone)
    return extracted_phone


print(extract_phone_number_from_expression("TESTE"))
