""""
Single Inheritance:
In Single Inheritance, a child class inherits from only one parent class. 
This is the simplest and most common form of inheritance.
"""

# Parent Class
class Device:
    def __init__(self, brand):
        self.brand = brand
        
    def power_on(self):
        print(f"{self.brand} device is turning on...")

# Child Class inheriting from Device
class Laptop(Device):
    def boot_os(self):
        print(f"{self.brand} laptop is loading operating system.")

# Usage
my_laptop = Laptop("Dell")
my_laptop.power_on()  # Inherited method: "Dell device is turning on..."
my_laptop.boot_os()   # Child method: "Dell laptop is loading operating system."