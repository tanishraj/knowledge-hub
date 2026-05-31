"""
Multilevel Inheritance
In Multilevel Inheritance, a class inherits from a child class, 
creating a chain of inheritance (like a family tree: 
Grandparent -> Parent -> Child). 
The class at the bottom gets access to everything above it.
"""

# Grandparent Class
class Vehicle:
    def move(self):
        print("Moving forward...")

# Parent Class (inherits from Vehicle)
class Car(Vehicle):
    def play_music(self):
        print("Playing radio music...")

# Child Class (inherits from Car)
class ElectricCar(Car):
    def charge_battery(self):
        print("Battery charging...")

# Usage
tesla = ElectricCar()
tesla.move()            # Inherited from Grandparent (Vehicle)
tesla.play_music()      # Inherited from Parent (Car)
tesla.charge_battery()  # Defined in Child (ElectricCar)