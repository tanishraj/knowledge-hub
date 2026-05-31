"""
Input and Output in Python
In Python, you can use the built-in input() function to get user input and the print() function to display output. 
The input() function reads a line of text from the user and returns it as a string. 
The print() function is used to display output to the console.
"""

name = input("Enter your name: ")  # Get user input for name
age = input("Enter your age: ")  # Get user input for age

# We can use the print() function to display the user's name and age in different ways.
print("Hello ", name, "! You are ", age, " years old.", sep="")  # Display output to the user
print("Hello " + name + "! You are " + age + " years old.")  # Display output to the user


"""
What is f-string?
An f-string, or formatted string literal, is a way to embed expressions inside string literals, 
using curly braces {}. It allows you to include variables and expressions directly within a string, 
making it easier to format and display output. F-strings were introduced in Python 3.6 and provide a 
more concise and readable way to format strings compared to older methods like str.format() 
or string concatenation.
"""

print(f"Hello {name}! You are {age} years old.")  # Display output to the user