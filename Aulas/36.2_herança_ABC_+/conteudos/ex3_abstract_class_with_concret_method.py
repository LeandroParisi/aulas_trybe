from abc import ABC, abstractmethod
import gzip
import json


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def compress(self):
        binary_content = json.dumps(self.build()).encode("utf-8")

        with gzip.open(self.export_file + ".gz", "wb") as compressed_file:
            compressed_file.write(binary_content)

    @abstractmethod
    def serialize(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


class SalesReportCSV(SalesReport):
    # Sua implementação vai aqui
    pass


# Mas bom! Até aí tudo muito bom. Mas chega, um tempo depois, uma nova demanda! "Nossos relatórios estão fazendo um sucesso incrível e agora precisamos que clientes possam baixá-los, compactados, lógico, e descompactá-los! Mas nossos clientes não tem perfil técnico e não vão saber descompactar um arquivo .gz, então é obrigatório nós compactarmos ele em .zip também!"
# Você poderia pensar que basta, então, mudar o método .compress() para que compacte em .zip ao invés de .gz mas não! O compactamento do gzip é mais eficiente que o zip . Se mudarmos isso, teremos impacto de custos na nossa infraestrutura e não precisamos disso! Precisamos garantir que todos os relatórios sejam compactados em .zip e em .gz .

# Nós já sabemos que não podemos criar, na classe mãe, uma função compress_zip para fazer o que precisamos. Se fizessemos isso precisaríamos mudar o nome da função compress para compress_gzip , e como consequência mudar todos os milhares de lugares onde essa função é chamada.
