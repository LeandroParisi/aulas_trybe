# order
# product

from enum import Enum

categories = {1: "drink", 2: "food"}
types = {1: "entry", 2: "main_meal", 3: "alcohoolic", 4: "non_alcohoolic"}


class Product:
    def __init__(self, category, type, name, price):
        self.category = category
        self.type = type
        self.name = name
        self.price = price


class OrderStatus(Enum):
    ORDERED = 1
    READY = 2
    PAYMENT = 3
    FULLFILLED = 4


class Order:
    def __init__(self, table, payment_method, status, products):
        self.table = table
        self.payment_method = payment_method
        self.status = status
        self.products = products
        self.total_price = 0

    def verify_status_validity(self, status):
        if status in OrderStatus:
            self.status = status
            return
        else:
            raise ValueError("Invalid Order Status")

    def change_table(self):
        pass

    def set_payment_method(self):
        pass

    def change_status(self, status_step):
        pass

    def add_products(self, products):
        pass

    def remove_products(self, products):
        pass

    def calculate_total_price(self):
        pass

    def get_order_status(self):
        return self.status
