"""
Static Methods in Python
A static method is a method that belongs to a class, but does not require 
access to the instance (self) or class (cls)

1) Define using @staticmethod decorator
2) Does not take self
3) Belongs to the class and can be called using class name
4) Used when method is related to the class logically
"""

class MathUtils:
    @staticmethod
    def add(a,b):
        return a + b
    
    @staticmethod
    def is_even(num):
        return num % 2 == 0
    
# Calling static methods
print(MathUtils.add(1,2)) # 3
print(MathUtils.is_even(2)) # true
