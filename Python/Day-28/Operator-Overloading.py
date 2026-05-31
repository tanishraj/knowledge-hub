"""
Operator Overloading
Changing the behavior for any of the operator by writing your own implementation
"""

# Example:
class Sum:
    def __init__(self, a, b):
        self.a = a
        self.b = b
    
    def __add__(self, other):
        # Combines properties from self (left) and other (right)
        return f"{self.a}{self.b} and {other.a}{other.b}"

obj1 = Sum("Hello", "World")
obj2 = Sum("Python", "Code")

# Equivalent to obj1.__add__(obj2)
result = obj1 + obj2
print(result)  # Output: HelloWorld and PythonCode


# Vector Example:
class Vector2D:
    def __init__(self, x, y):
        self.x = x
        self.y = y
    
    def __add__(self, other):
        # Add left object's values to right object's values
        new_x = self.x + other.x
        new_y = self.y + other.y
        return Vector2D(new_x, new_y)

v1 = Vector2D(5, 10)
v2 = Vector2D(3, 4)

v3 = v1 + v2
print(v3.x, v3.y)  # Output: 8 14