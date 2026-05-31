"""
Python Loops
In Python, loops are used to execute a block of code repeatedly until a certain condition is met. 
There are two main types of loops in Python: for loops and while loops. 
1. For Loops:
A for loop is used to iterate over a sequence (like a list, tuple, or string) or other iterable objects. 

The syntax is:
for variable in sequence:
    # code to execute

2. While Loops:
A while loop is used to execute a block of code as long as a specified condition is true.
The syntax is:
while condition:
    # code to execute


3. do-while Loops:
Python does not have a built-in do-while loop, but you can simulate it using a while loop. 
The code block will execute at least once before the condition is checked.
The syntax is:
while True:
    # code to execute
    if not condition:
        break


4. Break and Continue:
- The break statement is used to exit a loop prematurely when a certain condition is met.
- The continue statement is used to skip the current iteration of the loop and move to the next iteration.
Syntax for break:
for variable in sequence:
    if condition:
        break
    # code to execute

Syntax for continue:
for variable in sequence:
    if condition:
        continue
    # code to execute
"""

# Example of a for loop
fruits = ["apple", "banana", "cherry"]
for fruit in fruits:
    print(fruit)

# Example of a while loop
count = 0
while count < 5:
    print(count)
    count += 1

# Example of a do-while loop simulation
count = 0
while True:
    print(count)
    count += 1
    if count >= 5:
        break


# Example of break statement
for number in range(10):
    if number == 5:
        break
    print(number)


# Example of continue statement
for number in range(10):
    if number % 2 == 0:
        continue
    print(number)
