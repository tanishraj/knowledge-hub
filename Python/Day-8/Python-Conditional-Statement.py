"""
Python Conditional Statement
In Python, conditional statements are used to perform different actions based on different conditions. 
The most common conditional statements in Python are:
1. if statement
2. if-else statement
3. if-elif-else statement

1. if statement:
The if statement is used to test a specific condition. 
If the condition is true, the block of code inside the if statement is executed. 
If the condition is false, the block of code is skipped.

2. if-else statement:
The if-else statement is used to test a specific condition.
If the condition is true, the block of code inside the if statement is executed.
If the condition is false, the block of code inside the else statement is executed.

3. if-elif-else statement:
The if-elif-else statement is used to test multiple conditions.
If the first condition is true, the block of code inside the if statement is executed.
If the first condition is false, the next condition is tested.
If the second condition is true, the block of code inside the elif statement is executed.
If the second condition is false, the block of code inside the else statement is executed.
"""

# Example of if statement
age = int(input("Enter your age: "));
if age >= 18:
    print("You are an adult.")


# Example of if-else statement
age = int(input("Enter your age: "));
if age >= 18:
    print("You are an adult.");
else:    
    print("You are a minor.");


# Example of if-elif-else statement
age = int(input("Enter your age: "));
if age < 13:
    print("You are a child.");
elif age < 18:
    print("You are a teenager.");
else:    
    print("You are an adult.");

# Nested if statement
age = int(input("Enter your age: "));
if age >= 18:
    print("You are an adult.");
    if age >= 65:
        print("You are a senior citizen.");
    else:
        print("You are a working adult.");
else:    
    print("You are a minor.");  

# Gotcha: In Python, the indentation is very important. 
# The block of code inside the if, elif, and else statements must be indented.
