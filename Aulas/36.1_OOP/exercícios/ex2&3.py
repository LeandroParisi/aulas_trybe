from abc import ABC, abstractmethod


class Shape(ABC):
    @abstractmethod
    def calculate_area(self):
        raise NotImplementedError()

    @abstractmethod
    def calculate_perimeter(self):
        raise NotImplementedError()


class Square(Shape):
    def __init__(self, height):
        self.height = height

    def calculate_area(self):
        return self.height * self.height

    def calculate_perimeter(self):
        return self.height * 4


class Rectangle:
    def __init__(self, height, base):
        self.height = height
        self.base = base

    def calculate_area(self):
        return self.height * self.base

    def calculate_perimeter(self):
        return (self.height * 2) + (self.base * 2)


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius

    def calculate_area(self):
        return self.PI * self.radius * self.radius

    def calculate_perimeter(self):
        return 2 * self.PI * self.radius
