"""Tests with error checking"""

import pytest
from ex2 import divide


# erro certo
def test_divide_when_other_number_is_zero_raises_an_exception():
    with pytest.raises(ZeroDivisionError, match="division by zero"):
        divide(2, 0)


# erro errado
# def test_divide_when_other_number_is_zero_raises_an_exception():
#     with pytest.raises(ValueError, match="division by zero"):
#     divide(2, 0)


# Utilizamos a função raises da pytest , que verifica se a exceção ocorreu. Caso contrário, ela lança um AssertionError , indicando que o teste não passou. Podemos verificar também se o texto retornado na exceção é o esperado, através do parâmetro match , que pode receber uma expressão regular. No exemplo, temos uma divisão por zero, que lança a exceção esperada, e o teste passa com sucesso.
