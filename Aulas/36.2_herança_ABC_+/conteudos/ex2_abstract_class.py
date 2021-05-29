from abc import ABC, abstractmethod
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    @abstractmethod
    def get_length(self):
        print("Tamanho do arquivo")


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        print("Agora sim, um get_length implementado")


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file, "w", newline="") as csvfile:
            csv.writer(csvfile)


json_report = SalesReportJSON("meu_json")
json_report.get_length()
