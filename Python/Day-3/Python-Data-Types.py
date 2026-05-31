""" 
Python Data Types
Data types in Python are used to classify the type of data that a variable can hold.
Python has several built-in data types, including:
1) Numeric Data Types: int, float, complex
2) Sequence Data Types: list, tuple, range
3) Mapped Data Types: dict, set
4) Text Data Type: str
5) Boolean Data Type: bool
"""

x = 5 # int
y = 3.14 # float
z = 2 + 3j # complex
print(x) # Output: 5
print(y) # Output: 3.14
print(z) # Output: (2+3j)

list1 = [1, 2, 3, 4, 5] # list
print(list1) # Output: [1, 2, 3, 4, 5]
tuple = (1, 2, 3, 4, 5) # tuple
print(tuple) # Output: (1, 2, 3, 4, 5)
num_range = range(1, 6) # range
print(list(num_range)) # Output: [1, 2, 3, 4, 5]
num_range = range(1, 10, 2) # range with step
print(list(num_range)) # Output: [1, 3, 5, 7, 9]
num_range = range(10, 0, -1) # range with negative step
print(list(num_range)) # Output: [10, 9, 8, 7, 6, 5, 4, 3, 2, 1]
num_range = range(5) # range with single parameter
print(list(num_range)) # Output: [0, 1, 2, 3, 4]

dict = {"name": "Alice", "age": 30} # dict
print(dict) # Output: {'name': 'Alice', 'age': 30}
set = {1, 2, 3, 4, 5} # set
print(set) # Output: {1, 2, 3, 4, 5}

str = "Hello, World!" # str
print(str) # Output: Hello, World!

bool = True # bool
print(bool) # Output: True


# Confusion: 
# The range function returns a range object, which is an iterable. To see the actual numbers in the range, we can convert it to a list using the list() function.
num_range = range(1, 6) # range
print(num_range);
print(list(num_range)) # Output: [1, 2, 3, 4, 5]


"""
Notes:
1) The range function is used to generate a sequence of numbers. It takes three parameters: start, stop, and step. The start parameter is the starting number of the sequence (inclusive), the stop parameter is the ending number of the sequence (exclusive), and the step parameter is the increment between each number in the sequence (default is 1).
2) The range function returns a range object, which is an iterable. To see the actual numbers in the range, we can convert it to a list using the list() function.
3) The range function is commonly used in for loops to iterate over a sequence of numbers.
4) The range function can also be used to create a list of numbers by converting the range object to a list using the list() function.
5) The range function can be used with negative step values to generate a sequence of numbers in reverse order.
6) The range function can be used with a single parameter to generate a sequence of numbers starting from 0 up to the specified number (exclusive).
7) Dont use range, list as variable names as they are built-in functions in Python. Using them as variable names can lead to confusion and errors in your code.
"""
