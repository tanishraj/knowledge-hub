"""
Super Keyword:
Super keyword is used to refer parent class. 
Its useful when a class inherits from multiple parent 
classes and you want to call a method from one of the parent classes.

When a class inherits from a parent class, it can override or extend the 
methods defined in the parent class. However, sometimes you might want to 
use the parent class method in the child class.

This is where we use super() keyword.
"""

class Employee:
    def __init__(self, name, id):
        self.name = name
        self.id = id

class Programmer(Employee):
    def __init__(self, name, id, lang):
        # Below 2 props are already available on the parent class
        self.name = name
        self.id = id
        
        self.lang = lang

p1 = Programmer("Tanish", 101, "Python")
print(f"{p1.name} - {p1.id} - {p1.lang}") # Tanish - 101 - Python

"""
self.name = name
self.id = id

is being repeated in the parent and child class.
"""


class Programmer(Employee):
    def __init__(self, name, id, lang):
        # Can use super keyword
        super().__init__(name, id)
        self.lang = lang

p1 = Programmer("Tanish", 101, "Python")
print(f"{p1.name} - {p1.id} - {p1.lang}") # Tanish - 101 - Python

