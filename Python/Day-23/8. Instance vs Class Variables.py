"""
Instance vs Class variables in Python
Variables defined inside a class can be either instance variable or a class variable
It differin where they are stored, how they are accessed or how they behave.

Class Variable:
Class variable is available to all the instance of the class. and when updated, will
be reflected on all the instance.

Instance Variable:
Instance Variable is available for each instance that is created from that class. 
Updating instance variable only applies to that particular instance.
"""

class Person:
    # Class Variable
    species = "Human"

    def __init__(self, name):
        # Instance Variable
        self.name = name
        
p1 = Person("Tanish")
p2 = Person("Vaishali")

print(f"{p1.name} = {p1.species}") # Tanish = Human
print(f"{p2.name} = {p2.species}") # Vaishali = Human

Person.species = "Homo Sapiens" # updating class variables

print(f"{p1.name} = {p1.species}") # Tanish = Homo Sapiens
print(f"{p2.name} = {p2.species}") # Vaishali = Homo Sapiens

p1.species = "JAANWAR"
print(f"{p1.name} = {p1.species}") # Tanish = JAANWAR
print(f"{p2.name} = {p2.species}") # Vaishali = Homo Sapiens