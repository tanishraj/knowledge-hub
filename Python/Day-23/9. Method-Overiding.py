"""
Method Overriding
"""

class Shape:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def area(self):
        return self.x * self.y
    

rectangle = Shape(5,4)
print(rectangle.area()) # 20


class Circle(Shape):
    def __init__(self, radius):
        self.radius = radius
        super().__init__(radius, radius)

    def area(self):
        return 3.14 * super().area()


circle = Circle(5)
print(circle.area()) # 78.5