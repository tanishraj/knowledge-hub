"""
Odd Or Even
Ask the user for a number. 
Depending on whether the number is even or odd, 
print out an appropriate message to the user. 
"""

# Simple If...else
num = int(input("Enter a number: "))

if num % 2 == 0:
    print("Even number")
else:
    print("Odd number")


# Single line Code
print("Even" if (num := int(input("Enter a number: "))) % 2 == 0 else "Odd")


# Single line Code
print("Even" if (int(input("Enter a number: "))) % 2 == 0 else "Odd")

