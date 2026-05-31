"""
Python Function Parameters
Function parameters are the variables that you define in the function definition.
They act as placeholders for the values that will be passed to the function when it is called.
You can have different types of parameters in Python, including:
1. Positional Parameters: These are the most common type of parameters. They are defined in the function definition and are assigned values based on their position when the function is called.
2. Default Parameters: These parameters have default values assigned to them. If the caller does not provide a value for a default parameter, the default value will be used.
3. Keyword Parameters: These parameters are passed to the function using their names. This allows you to specify values for parameters in any order.
4. Variable-length Parameters: These parameters allow you to pass a variable number of arguments to a function.
"""

"""
1. Positional Parameters
Positional parameters are defined in the function definition and are assigned values based on their position when the function is called.
def add(a, b):
    return a + b
"""
def add(a, b):
    return a + b
print(add(5, 3))  # Output: 8

"""
2. Default Parameters
Default parameters have default values assigned to them. If the caller does not provide a value for a default parameter, the default value will be used.
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
"""
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
print(greet("Alice"))  # Output: Hello, Alice!
print(greet("Bob", "Hi"))  # Output: Hi, Bob!


"""
3. Keyword Parameters
Keyword parameters are passed to the function using their names. This allows you to specify values for parameters in any order.
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
"""
def greet(name, greeting="Hello"):
    return f"{greeting}, {name}!"
print(greet(name="Alice", greeting="Hi"))  # Output: Hi, Alice!
print(greet(greeting="Hi", name="Bob"))  # Output: Hi, Bob!


"""
4. Variable-length Parameters
Variable-length parameters allow you to pass a variable number of arguments to a function.
def sum_all(*args):
    return sum(args)
"""
def sum_all(*args):
    print(f"Arguments received: {type(args)}")  # This will show the tuple of arguments
    return sum(args)
print(sum_all(1, 2, 3))  # Output: 6
print(sum_all(4, 5))     # Output: 9


"""
Pass Dictionary as Keyword Arguments
You can also pass a dictionary as keyword arguments using the ** operator.
def print_info(**kwargs):
    for key, value in kwargs.items():
        print(f"{key}: {value}")
"""

def print_info(**kwargs):
    print(f"Arguments received: {type(kwargs)}")
    for key, value in kwargs.items():
        print(f"{key}: {value}")
print_info(name="Alice", age=30, city="New York")
# Output:
# name: Alice
# age: 30
# city: New York