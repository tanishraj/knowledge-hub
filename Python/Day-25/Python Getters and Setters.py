"""
Getters and Setters in Python
Getters and Setters are methods used to access(get) and update(set)
the value of an object's private attribute in a controlled way.

Why use getters and setters?
Encapsulation: Protects data from direct access and unintended modification
Validation: Allows you to validate data beofre updating an attribute
"""

# Basic Example
class Person:
    def __init__(self, name, age):
        self._name = name # Protected by convention
        self._age = age # Protected by convention
    
    def get_age(self):
        return self._age
    
    def set_age(self, age):
        if age < 0:
            raise ValueError("Age can not be negative")
        self._age = age

# Usage
tanish = Person("Tanish", 33)
print(tanish.get_age()) # 33
tanish.set_age(35)
print(tanish.get_age()) # 35
    

# Using @property (Pythonic way)
class Person:
    def __init__(self, name, age):
        self._name = name # Protected by convention
        self._age = age # Protected by convention
    
    @property
    def age(self):
        return self._age
    
    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age can not be negative")
        self._age = value

# Usage
tanish = Person("Tanish", 33)
print(tanish.age) # 33
tanish.age = 35
print(tanish.age) # 35
tanish.age = -1 # ValueError: Age can not be negative