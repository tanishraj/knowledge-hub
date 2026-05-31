"""
Python Decorators
A decorator is a function that takes another function and extends
and modifies its behavior without permanently modifying the original values.
The function that is returned from decorators is often referred as 
decorated function.

Syntax:
@decorator_name
"""

def greet(fn):
    def modified_fn():
        print("Good Morning")
        fn()
        print("Thank you for using this function")
    return modified_fn

@greet
def introduction():
    print("My name is Tanish")

introduction();
"""
Output:
Good Morning
My name is Tanish
Thank you for using this function
"""

# Decorators with arguments
def repeat(num_times):
    def decorator(fn):
        def wrapper(*args, **kwargs):
            for _ in range(num_times):
                result = fn(*args, **kwargs)
            return result
        return wrapper
    return decorator
    
@repeat(3)
def greet(name):
    print(f"Hi, {name}!")

greet("Vaishali")
"""
Output:
Hi, Vaishali!
Hi, Vaishali!
Hi, Vaishali!
"""


# Mutiple decorators Example
def decorator1(fn):
    def wrapper(*args, **kwargs):
        print("Decorator 1 -  Before")
        result = fn(*args, **kwargs)
        print("Decorator 1 -  After")
        return result
    return wrapper


def decorator2(fn):
    def wrapper(*args, **kwargs):
        print("Decorator 2 -  Before")
        result = fn(*args, **kwargs)
        print("Decorator 2 -  After")
        return result
    return wrapper


@decorator1
@decorator2
def greet(name):
    print(f"Hi, {name}!")

greet("Vaishali")
"""
Output:
Decorator 1 -  Before
Decorator 2 -  Before
Hi, Vaishali!
Decorator 2 -  After
Decorator 1 -  After
"""


# Preseving Function metadata using functools.wraps
from functools import wraps

def decorator(fn):
    @wraps(fn)
    def wrapper(*args, **kwargs):
        '''this is wrapper doc string'''
        print("Decorator 2 -  Before")
        result = fn(*args, **kwargs)
        print("Decorator 2 -  After")
        return result
    return wrapper

@decorator
def greet(name):
    '''this is original docstring'''
    print(f"Hi, {name}!")

greet("Vaishali")
'''
Output:
Decorator 2 -  Before
Hi, Vaishali!
Decorator 2 -  After
'''

print(greet.__name__) # greet
print(greet.__doc__) # this is original docstring