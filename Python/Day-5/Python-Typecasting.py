"""
Python Typecasting
Typecasting is the process of converting one data type to another. In Python, you can use built-in functions to perform typecasting. Here are some common typecasting functions:
1. int(): Converts a value to an integer.
2. float(): Converts a value to a floating-point number.
3. str(): Converts a value to a string.
4. bool(): Converts a value to a boolean (True or False).
"""

x = "10"
y = int(x)  # Convert string to integer
a = 3.14
b = int(a)  # Convert float to integer
c = str(y)  # Convert integer to string
d = bool(0)  # Convert integer to boolean (False)
e = bool(1)  # Convert integer to boolean (True)
print(y)  # Output: 10
print(b)  # Output: 3
print(c)  # Output: "10"
print(d)  # Output: False
print(e)  # Output: True

"""
Why this is important?
Typecasting is important because it allows you to work with different data types and perform 
operations that may not be possible with the original data type. For example, you may want to 
convert a string to an integer to perform mathematical operations, or convert a boolean to a 
string for display purposes. Understanding typecasting is essential for writing efficient and 
effective code in Python, as it enables you to manipulate data in the way that best suits your needs.
"""

#Example of typecasting in a practical scenario
# Let's say we have a user input for age, which is a string, and we want to perform a calculation with it.
age_input = input("Enter your age: ")  # User input is a string
age = int(age_input)  # Convert the string input to an integer
years_until_100 = 100 - age  # Calculate years until the user turns 100
print(f"You will turn 100 in {years_until_100} years.")  # Output the result to the user
