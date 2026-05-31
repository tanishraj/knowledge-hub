"""
Multiple Inheritance
In Multiple Inheritance, a single child class can inherit directly 
from more than one parent class simultaneously. 
This allows the child class to combine characteristics from 
completely different families of classes.
"""

# Parent Class 1
class Camera:
    def take_photo(self):
        print("Click! Photo taken.")

# Parent Class 2
class Phone:
    def make_call(self):
        print("Dialing and connecting call...")

# Child Class inheriting from BOTH Camera and Phone
class Smartphone(Camera, Phone):
    def browse_internet(self):
        print("Loading web browser...")

# Usage
iphone = Smartphone()
iphone.make_call()       # Inherited from Phone
iphone.take_photo()      # Inherited from Camera
iphone.browse_internet() # Defined in Smartphone