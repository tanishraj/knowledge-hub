"""
Object Oriented Programming Concept in Python:
OOPs is a programming paradigm based on the concept of objects.
It helps in writing clean, reusable and maintainable code.

Class:
A class is a blueprint for creating objects.

Object:
An object is an instance of the class.

For Example:
Before we construct a house, we first design a diagram for the house.
THe diagram is basically a blueprint and it can be considered as a class.
Using this diagram, we can create n number of houses of the same design.
Those houses will be the objects.

__init__ method:
This is called constructor method in python, which gets called as soon as 
the object is created.
"""

# Example Class
class Person:
    def __init__(self, name, age):
        self.name = name
        self.age = age
    
    def info(self):
        print(f"{self.name} is {self.age} years old.")

# We can create n number of person with this class
tanish = Person("Tanish", "33");
tanish.info() # Tanish is 33 years old.

vaishali = Person("Vaishali", 26);
vaishali.info() # Vaishali is 26 years old.


"""
Inheritance:
Inheritance allows a class(child) to inherit attributes and methods 
from another class(parent).
"""

class Animal:
    def __init__(self, name):
        self.name = name
    
    def info(self):
        print(f"Name is {self.name}")
    
class Dog(Animal):
    def speak(self):
        print("Bark Bark...")


max = Dog("Max");
max.info(); # Name is Max
max.speak(); # Bark Bark...


"""
Polymorphism:
Polymorphism allows method to do different things based on the object.
"""
class Bird:
    def sound(self):
        print("Chirp Chirp...")

class Eagle:
    def sound(self):
        print("Screech Screech...")

def make_sound(bird):
    bird.sound();

make_sound(Bird()) # Chirp Chirp...
make_sound(Eagle()) # Screech Screech...


"""
Encapsulation:
Encapsulation is bundling data and methods together,
and restricting direct access to some component.
"""
class Account:
    def __init__(self, balance):
        self.__balance = balance

    def deposit(self, amount):
        if(amount > 0):
            self.__balance += amount

    def get_balance(self):
        return self.__balance

acc = Account(1000) 
acc.deposit(500)
print(acc.get_balance()) # 1500


"""
Abstraction:
Abstraction hides complex implementation and show only the essential features
We achieve this using the abstract class.
"""
from abc import ABC, abstractmethod

class Vehicle(ABC):
    
    # This decorator '@abstractmethod' forces child classes to create this method
    @abstractmethod
    def start_engine(self):
        pass

    @abstractmethod
    def turn_off_engine(self):
        pass


class Car(Vehicle):
    def start_engine(self):
        # Messy internal details are written here
        print("Car: Injecting fuel... Sparking spark plugs... VROOM!")
        
    def turn_off_engine(self):
        print("Car: Cutting fuel lines... Engine stopped.")

class ElectricScooter(Vehicle):
    def start_engine(self):
        # Totally different internal logic, but same button name!
        print("Scooter: Activating lithium battery... System check green... Silent Beep.")
        
    def turn_off_engine(self):
        print("Scooter: Disengaging battery relay.")


# Create our objects
tesla = Car()
mi_scooter = ElectricScooter()

# A simple function that accepts ANY Vehicle
def ignition_sequence(vehicle_object):
    # Abstraction at work: We don't care HOW the engine starts, 
    # we just know that 'start_engine' is guaranteed to exist.
    vehicle_object.start_engine()

# --- Run the Code ---
ignition_sequence(tesla)       # Output: Car: Injecting fuel... Sparking spark plugs... VROOM!
ignition_sequence(mi_scooter)   # Output: Scooter: Activating lithium battery... System check green... Silent Beep.



"""
Access Modifiers
Python uses naming conventions for access modifiers

1) Public: (name) accessible from anywhere
2) Protected: (_name) accessible within class and subclass
3) Private: (__name) name mangled, meant to be private
"""

class Employee:
    def __init__(self, name, salary):
        self.name = name # Public
        self._salary = salary # Protected
        self.__id = 101 # Private
    
    def show(self):
        print(f"name = {self.name}")
        print(f"_salary = {self._salary}")
        print(f"__id = {self.__id}")

    def _calculate_bonus(self):
        return self._salary * 0.1
        
    def __secret(self):
        return "Secret Method"

emp = Employee("Tanish", 1000)
emp.show()
# Output:
# name = Tanish
# _salary = 1000
# __id = 101

# Accessing Public
print(emp.name) # Tanish (Works)

# Accessing Protected
print(emp._salary) # 1000 (Works, but not recommended)

# Accessing Private
# print(emp.__id) # Error

# Accessing Private via name mangling (NOT RECOMMENDED)
print(emp._Employee__id) # 101 (Works)

# Accessing protected method
print(emp._calculate_bonus()) # 100.0 (Works, but not recommended)

# Accessing Private method
print(emp._Employee__secret()) # Secret Method (Works, but not recommended)


"""
self
The self parameter us reference to the current instance of the class and is 
used to access cariables that belongs to the calss.
"""
