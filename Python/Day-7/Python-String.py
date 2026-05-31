"""
String in Python
String is a sequence of characters. It is one of the most commonly used data types in Python. 
Strings are immutable, which means that once a string is created, it cannot be changed.
You can create a string by enclosing characters in single quotes (' '), double quotes (" "), or triple quotes (''' ''' or """ """).
"""

# Creating strings
string1 = 'Hello, World!'
string2 = "Python is great!"
string3 = '''This is a multi-line string.'''
string4 = """This is also a multi-line string."""
# String concatenation
greeting = string1 + " " + string2
print(greeting) # Output: "Hello, World! Python is great!"

# String formatting
name = "Alice"
age = 30
formatted_string = f"My name is {name} and I am {age} years old."
print(formatted_string) # Output: "My name is Alice and I am 30 years old."

# String methods
# Convert to uppercase
upper_string = string1.upper()
print(upper_string) # Output: "HELLO, WORLD!"

# Convert to lowercase
lower_string = string1.lower()
print(lower_string) # Output: "hello, world!"

#Capitalize the first letter of each word
title_string = string1.title()
print(title_string) # Output: "Hello, World!"

# Replace a substring
replaced_string = string1.replace("World", "Python")
print(replaced_string) # Output: "Hello, Python!"

# Find the index of a substring
index_of_world = string1.find("World")
print(index_of_world) # Output: 7

# Count occurrences of a substring
count_of_l = string1.count("l")
print(count_of_l) # Output: 3

# Strip whitespace from the beginning and end of a string
string_with_whitespace = "   Hello, World!   "
stripped_string = string_with_whitespace.strip()
print(stripped_string) # Output: "Hello, World!"

# rStrip whitespace from the end of a string
rstrip_string = string_with_whitespace.rstrip()
print(rstrip_string) # Output: "   Hello, World!"

# lStrip whitespace from the beginning of a string
lstrip_string = string_with_whitespace.lstrip()
print(lstrip_string) # Output: "Hello, World!   "

# Split a string into a list
split_string = string1.split(", ")
print(split_string) # Output: ['Hello', 'World!']

# Check if a substring is in the string
contains_world = "World" in string1
print(contains_world) # Output: True

# Get the length of a string
length_of_string = len(string1)
print(length_of_string) # Output: 13

# String slicing
sliced_string = string1[0:5]  # Get the first 5 characters
print(sliced_string) # Output: "Hello"

# Reverse a string
reversed_string = string1[::-1]
print(reversed_string) # Output: "!dlroW ,olleH"

# Reverse a selected portion of a string
reversed_portion = string1[7:12][::-1]  # Reverse the word "World"
print(reversed_portion) # Output: "dlroW"

# Negative Slicing
negative_slice = string1[-6:-1]  # Get the last 5 characters (excluding the last character)
print(negative_slice) # Output: "World"

# How does Python interpret negative slicing?
negative_slice = string1[-6:-1] # "World"
negative_slice_explanation = string1[len(string1) - 6: len(string1) - 1];
negative_slice_explanation = string1[7:12] # This is equivalent to the negative slicing above
# Output: "World" 


# endswith a specific substring
ends_with_exclamation = string1.endswith("!")
print(ends_with_exclamation) # Output: True

# endswith a specific substring index
ends_with_world = string1.endswith("World!", 0, 12)
print(ends_with_world) # Output: True

# startswith a specific substring
starts_with_hello = string1.startswith("Hello")
print(starts_with_hello) # Output: True

# startswith a specific substring index
starts_with_hello = string1.startswith("Hello", 0, 5)
print(starts_with_hello) # Output: True

# isalpha() method checks if all the characters in the string are alphabetic
is_alpha = string1.isalpha()
print(is_alpha) # Output: False (because of the comma and space)

# isdigit() method checks if all the characters in the string are digits
is_digit = string1.isdigit()
print(is_digit) # Output: False (because of the letters and punctuation)

# isalnum() method checks if all the characters in the string are alphanumeric (letters and numbers)
is_alnum = string1.isalnum()
print(is_alnum) # Output: False (because of the comma and space)

# isspace() method checks if all the characters in the string are whitespace
is_space = string1.isspace()
print(is_space) # Output: False (because of the letters and punctuation)

# islower() method checks if all the characters in the string are lowercase
is_lower = string1.islower()
print(is_lower) # Output: False (because of the uppercase letters)

# isupper() method checks if all the characters in the string are uppercase
is_upper = string1.isupper()
print(is_upper) # Output: False (because of the lowercase letters)

# isprintable() method checks if all the characters in the string are printable
is_printable = string1.isprintable()
print(is_printable) # Output: True (because all characters are printable)

# non Printable characters
non_printable_string = "Hello, World!\nThis is a new line."
is_non_printable = non_printable_string.isprintable()
print(is_non_printable) # Output: False (because of the newline character)

# isTitle() method checks if the string is in title case (the first letter of each word is uppercase and the rest are lowercase)
is_title = string1.istitle()
print(is_title) # Output: True (because "Hello" and "World" are in title case)

# swapcase() method returns a new string with uppercase letters converted to lowercase and vice versa
swapped_case_string = string1.swapcase()
print(swapped_case_string) # Output: "hELLO, wORLD!"






"""
Gotchas:
1. Strings are immutable, so you cannot change a string after it has been created. You can only create a new string based on the original string.
2. When using triple quotes for multi-line strings, be mindful of the indentation. The indentation will be included in the string, which may not be what you intended.
3. When concatenating strings, make sure to include spaces if needed, as concatenation does not automatically add spaces between strings.
4. Be careful with string formatting, especially when using f-strings, as they can lead to syntax errors if not used correctly. Always ensure that the variables you are trying to format are defined and that the syntax is correct.
"""

"""
What is [::-1]?
The [::-1] is a slicing technique in Python that is used to reverse a string. 
When you use [::-1], it means that you want to slice the string from the beginning to the end, but with a step of -1, which effectively reverses the string.
"""