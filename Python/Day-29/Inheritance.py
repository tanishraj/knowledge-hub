"""
Inheritance in Python:
When a class derives from another class. The child class will inherit
all the public and protected properties and methods from the parent class.
Also, it can have its own property and methods.

Inheriting parent class into child class is called inheritance.
"""

class Animal:
    def __init__(self, name):
        self.name = name

    def speak(self):
        print(f"{self.name} makes a sound")


class Dog(Animal):
    def bark(self):
        print(f"{self.name} barks")
    
max = Dog("Max");
max.speak() # Max makes a sound
max.bark() # Max barks
