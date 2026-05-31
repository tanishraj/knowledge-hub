"""
String Formatting in Python

OLD STYLE
1. %s - String (or any object with a string representation, like numbers)
2. %d - Integers
3. %f - Floating point numbers
4. %x/%X - Integers in hexadecimal representation (lowercase/uppercase)
5. %% - A literal '%' character

NEW STYLE
1. {} - Placeholder for any type of value
2. {0}, {1}, ... - Positional arguments
3. {name} - Named placeholders
4. {:.2f} - Formatting for floating point numbers (2 decimal places)
5. {0:10} - Formatting for width (10 characters wide)
6. {0:<10} - Left-align within the specified width
7. {0:>10} - Right-align within the specified width
8. {0:^10} - Center-align within the specified width
9. {0:0>10} - Pad with zeros on the left to fill the specified width
10. {0:0<10} - Pad with zeros on the right to fill the specified width
11. {0:0^10} - Pad with zeros on both sides to fill the specified width
12. {0:,.2f} - Format number with commas as thousands separators and 2 decimal places
13. {0:.2%} - Format number as a percentage with 2 decimal places
14. {0:10.2f} - Format number with width 10 and 2 decimal places
15. {0:>10.2f} - Format number with width 10, 2 decimal places, and right-align
"""


# Example 1: Using old style string formatting
name = "Alice"
age = 30
print("My name is %s and I am %d years old." % (name, age))  # Output: My name is Alice and I am 30 years old.

# New Style String Formatting Examples

# 1: Using {} placeholders
print("My name is {} and I am {} years old.".format(name, age))  # Output: My name is Alice and I am 30 years old.

# 2: Using positional arguments
print("My name is {0} and I am {1} years old.".format(name, age))  # Output: My name is Alice and I am 30 years old.

# 3: Using named placeholders
print("My name is {name} and I am {age} years old.".format(name=name, age=age))  # Output: My name is Alice and I am 30 years old.

# 4: Using formatting for floating point numbers
pi = 3.14159
print("Pi is approximately {:.2f}.".format(pi))  # Output: Pi is approximately 3.14.

# 5: Using formatting for width and alignment
print("Name: {0:10} Age: {1:5}".format(name, age))  # Output: Name: Alice      Age:    30
print("Name: {0:<10} Age: {1:5}".format(name, age))  # Output: Name: Alice      Age:    30
print("Name: {0:>10} Age: {1:5}".format(name, age))  # Output: Name:      Alice Age:    30
print("Name: {0:^10} Age: {1:5}".format(name, age))  # Output: Name:   Alice     Age:    30
print("Name: {0:0>10} Age: {1:5}".format(name, age))  # Output: Name: 00000Alice Age:    30

# 6: Using formatting with commas and percentage
number = 1234567.89
print("Formatted number: {0:,.2f}".format(number))  # Output: Formatted number: 1,234,567.89
print("Percentage: {0:.2%}".format(0.1234))  # Output: Percentage: 12.34

# 7: Using formatting with width and decimal places
print("Formatted number: {0:10.2f}".format(pi))  # Output: Formatted number:       3.14
print("Formatted number: {0:>10.2f}".format(pi))  # Output: Formatted number:       3.14
