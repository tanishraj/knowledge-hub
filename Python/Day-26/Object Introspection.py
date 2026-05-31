"""
dir, __dict__ and help method:
These 3 methods are builtin methods in python to explore objects, 
and its attributes and documentation
"""

"""
dir():
returns a sorted list of names (attributes and methods) of an object.
"""
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age

s = Student("Alice", 20)
print(dir(s))
"""
Output:
['__class__', '__delattr__', '__dict__', '__dir__', '__doc__', '__eq__', 
'__firstlineno__', '__format__', '__ge__', '__getattribute__', '__getstate__', 
'__gt__', '__hash__', '__init__', '__init_subclass__', '__le__', '__lt__', 
'__module__', '__ne__', '__new__', '__reduce__', '__reduce_ex__', '__repr__', 
'__setattr__', '__sizeof__', '__static_attributes__', '__str__', 
'__subclasshook__', '__weakref__', 'age', 'name']
"""


"""
__dict__:
Returns the dictionary of an object containing its writable attributes (instance variable)
"""

class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.course = "Python"

s = Student("Alice", 20)
print(s.__dict__)
"""
Output:
{'name': 'Alice', 'age': 20, 'course': 'Python'}
"""


"""
help():
Display the documentation for modules, classes, functions, methods and keywords.
"""
class Student:
    def __init__(self, name, age):
        self.name = name
        self.age = age
        self.course = "Python"

s = Student("Alice", 20)
print(help(s))