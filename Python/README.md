# Python Lessons

A structured reference for the Python lesson slides. The original slide deck is available as [Lessons/Lessons.pdf](Lessons/Lessons.pdf), and each section links to its matching slide image.

## Lesson Index

1. [Variables](#1-variables)
2. [Local and Global Variable](#11-local-and-global-variable)
3. [Data Types](#2-data-types)
4. [Operators](#3-operators)
5. [is vs ==](#31-is-vs-)
6. [Input and Output](#4-input-and-output)
7. [Typecasting](#5-typecasting)
8. [Typecasting](#51-typecasting)
9. [Conditional Statements](#6-conditional-statements)
10. [Conditional-Shorthand](#61-conditional-shorthand)
11. [Match Case](#7-match-case)
12. [Loops](#8-loops)
13. [Enumerate](#81-enumerate)
14. [Functions](#9-functions)
15. [Lambda Function](#91-lambda-function)
16. [Strings](#10-strings)
17. [String Methods](#101-string-methods)
18. [String formatting](#102-string-formatting)
19. [F-String](#103-f-string)
20. [Lists](#11-lists)
21. [List Methods](#111-list-methods)
22. [Tuples](#12-tuples)
23. [Tuples Methods](#121-tuples-methods)
24. [Docstrings](#13-docstrings)
25. [Sets](#14-sets)
26. [Sets Methods](#141-sets-methods)
27. [Dictionary](#15-dictionary)
28. [Dictionary](#151-dictionary)
29. [Dictionary Methods](#152-dictionary-methods)
30. [Exception Handling](#16-exception-handling)
31. [Exception Handling](#17-exception-handling)
32. [Virtual-Environment](#18-virtual-environment)
33. [Modules](#19-modules)
34. [Import-Statement](#191-import-statement)
35. [Import __name__=__main__](#192-import-name=main)
36. [OS Module](#193-os-module)
37. [File Module](#194-file-module)
38. [File Methods](#195-file-methods)
39. [OOPs](#20-oops)
40. [Access Modifiers](#201-access-modifiers)
41. [Inheritance](#202-inheritance)
42. [Inheritance Types](#2021-inheritance-types)
43. [Static Methods](#203-static-methods)
44. [Instance vs Class Variables](#204-instance-vs-class-variables)
45. [Class Methods](#205-class-methods)
46. [Super Keyword](#206-super-keyword)
47. [Decorators Intro](#21-decorators-intro)
48. [Decorators With Examples](#211-decorators-with-examples)
49. [Getters and Setters](#212-getters-and-setters)
50. [dir, __dict__, help](#22-dir-dict-help)
51. [Dunder Methods](#23-dunder-methods)
52. [Method Overriding](#24-method-overriding)
53. [Operator Overloading](#25-operator-overloading)
54. [Time Module](#26-time-module)
55. [Walrus Operator](#27-walrus-operator)
56. [SHutil Module](#28-shutil-module)
57. [Requests Module](#29-requests-module)
58. [Generators](#30-generators)
59. [Mini Projects](#mini-projects)

## 1. Variables

<details>
<summary>View lesson slide</summary>

![1. Variables](<Lessons/1. Variables.png>)

</details>

### Overview

Variables store reusable values in memory. Use descriptive names, assign values with `=`, reassign when needed, and check types with `type()`. Python is dynamically typed, so the same variable name can refer to values of different types over time. Constants are conventionally written in `UPPER_CASE`, although Python does not enforce them.

### Example

```python
name = "Rahul"
age = 18
is_student = True

print(type(name))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 1.1. Local and Global Variable

<details>
<summary>View lesson slide</summary>

![1.1. Local and Global Variable](<Lessons/1.1. Local and Global Variable.png>)

</details>

### Overview

A local variable is created inside a function and can only be used there. A global variable is created outside functions and can be accessed throughout the program. Use `global` only when a function must modify a global value; prefer parameters and return values for cleaner code.

### Example

```python
x = 10

def show():
    y = 20
    print(x, y)

show()
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 2. Data Types

<details>
<summary>View lesson slide</summary>

![2. Data Types](<Lessons/2. Data Types.png>)

</details>

### Overview

Python data types describe the kind of value being stored. Common built-in types include `int`, `float`, `str`, `bool`, `list`, `tuple`, `set`, `dict`, and `NoneType`. Use `type(value)` to inspect a value's type.

### Example

```python
age = 18
price = 99.99
name = "Rahul"
is_active = True
marks = [90, 85, 88]
student = {"name": "Rahul", "age": 18}

print(type(student))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 3. Operators

<details>
<summary>View lesson slide</summary>

![3. Operators](<Lessons/3. Operators.png>)

</details>

### Overview

Operators perform operations on values. Python includes arithmetic, comparison, assignment, logical, identity, membership, and bitwise operators. Operator precedence decides the order in which expressions are evaluated.

### Example

```python
a = 10
b = 3

print(a + b)      # 13
print(a // b)     # 3
print(a % b)      # 1
print(a > b)      # True
print(a > 5 and b < 5)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 3.1. is vs ==

<details>
<summary>View lesson slide</summary>

![3.1. is vs ==](<Lessons/3.1. is vs ==.png>)

</details>

### Overview

Use `==` to compare values. Use `is` to check whether two variables refer to the exact same object in memory. For most normal value comparisons, `==` is the correct choice.

### Example

```python
a = [1, 2]
b = [1, 2]
print(a == b)  # True
print(a is b)  # False
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 4. Input and Output

<details>
<summary>View lesson slide</summary>

![4. Input and Output](<Lessons/4. Input and Output.png>)

</details>

### Overview

Use `print()` to display output and `input()` to read user input. `input()` always returns a string, so convert it with `int()`, `float()`, or another type when numeric input is required.

### Example

```python
age = int(input("Enter age: "))
print("Age:", age)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 5. Typecasting

<details>
<summary>View lesson slide</summary>

![5. Typecasting](<Lessons/5. Typecasting.png>)

</details>

### Overview

Typecasting converts a value from one type to another. Common conversions include `int()`, `float()`, `str()`, `bool()`, `list()`, `tuple()`, and `set()`. Conversions only work when the value is compatible with the target type.

### Example

```python
age_text = "18"
age = int(age_text)

price = float("99.50")
message = "Age: " + str(age)

print(message)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 5.1. Typecasting

<details>
<summary>View lesson slide</summary>

![5.1. Typecasting](<Lessons/5.1. Typecasting.png>)

</details>

### Overview

Typecasting can be implicit or explicit. Python may automatically convert compatible numeric types in expressions, but explicit conversion is clearer when reading input or preparing output.

### Example

```python
result = 10 + 2.5
print(result)        # 12.5
print(type(result))  # float

marks = int("95")
print(marks + 5)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 6. Conditional Statements

<details>
<summary>View lesson slide</summary>

![6. Conditional Statements](<Lessons/6. Conditional Statements.png>)

</details>

### Overview

Conditional statements run code only when a condition is true. Use `if`, `elif`, and `else` to build decision-making logic. Indentation defines which statements belong to each branch.

### Example

```python
marks = 85
if marks >= 90:
    grade = "A"
elif marks >= 75:
    grade = "B"
else:
    grade = "C"
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 6.1 Conditional-Shorthand

<details>
<summary>View lesson slide</summary>

![6.1 Conditional-Shorthand](<Lessons/6.1 Conditional-Shorthand.png>)

</details>

### Overview

Python supports compact conditional expressions such as `value_if_true if condition else value_if_false`. Use shorthand conditionals for simple choices, not complex logic that becomes hard to read.

### Example

```python
age = 20
status = "adult" if age >= 18 else "minor"
print(status)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 7. Match Case

<details>
<summary>View lesson slide</summary>

![7. Match Case](<Lessons/7. Match Case.png>)

</details>

### Overview

`match` and `case` provide pattern matching. They are useful when one value may match several possible patterns. Use `_` as the default case when nothing else matches.

### Example

```python
command = "start"

match command:
    case "start":
        print("Starting")
    case "stop":
        print("Stopping")
    case _:
        print("Unknown command")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 8. Loops

<details>
<summary>View lesson slide</summary>

![8. Loops](<Lessons/8. Loops.png>)

</details>

### Overview

Loops repeat code. Use `for` loops to iterate over sequences and `while` loops to repeat while a condition remains true. `break` exits a loop, `continue` skips to the next iteration, and `else` can run when a loop finishes normally.

### Example

```python
for number in range(5):
    print(number)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 8.1. Enumerate

<details>
<summary>View lesson slide</summary>

![8.1. Enumerate](<Lessons/8.1. Enumerate.png>)

</details>

### Overview

`enumerate()` gives both index and value while looping through an iterable. It is cleaner than manually tracking a counter variable.

### Example

```python
names = ["Rahul", "Priya", "Aman"]

for index, name in enumerate(names, start=1):
    print(index, name)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 9. Functions

<details>
<summary>View lesson slide</summary>

![9. Functions](<Lessons/9. Functions.png>)

</details>

### Overview

Functions group reusable logic. Define them with `def`, pass data using parameters, and send results back with `return`. Functions make programs easier to organize, test, and reuse.

### Example

```python
def add(a, b):
    return a + b
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 9.1. Lambda Function

<details>
<summary>View lesson slide</summary>

![9.1. Lambda Function](<Lessons/9.1. Lambda Function.png>)

</details>

### Overview

A lambda is a small anonymous function written with `lambda`. It is useful for short one-expression functions, especially with tools like `map()`, `filter()`, and sorting keys.

### Example

```python
square = lambda number: number * number
print(square(5))

students = [("Aman", 85), ("Riya", 92)]
students.sort(key=lambda student: student[1])
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 10. Strings

<details>
<summary>View lesson slide</summary>

![10. Strings](<Lessons/10. Strings.png>)

</details>

### Overview

Strings store text. They can be indexed, sliced, concatenated, repeated, and iterated. Strings are immutable, so operations create new strings rather than changing the original.

### Example

```python
message = "Python"

print(message[0])
print(message[-1])
print(message[0:3])
print(len(message))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 10.1. String Methods

<details>
<summary>View lesson slide</summary>

![10.1. String Methods](<Lessons/10.1. String Methods.png>)

</details>

### Overview

String methods help transform and inspect text. Common methods include `upper()`, `lower()`, `strip()`, `replace()`, `split()`, `join()`, `find()`, `startswith()`, and `endswith()`.

### Example

```python
text = "  hello python  "

print(text.strip())
print(text.upper())
print(text.replace("python", "world"))
print("red,green,blue".split(","))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 10.2 String formatting

<details>
<summary>View lesson slide</summary>

![10.2 String formatting](<Lessons/10.2 String formatting.png>)

</details>

### Overview

String formatting inserts values into text. Older styles include `%` formatting and `str.format()`. Formatting is useful for readable output, reports, and messages.

### Example

```python
name = "Rahul"
age = 18

print("Name: %s, Age: %d" % (name, age))
print("Name: {}, Age: {}".format(name, age))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 10.3 F-String

<details>
<summary>View lesson slide</summary>

![10.3 F-String](<Lessons/10.3 F-String.png>)

</details>

### Overview

F-strings are the modern way to format strings. Prefix a string with `f` and place expressions inside `{}`. They are readable, concise, and support formatting options.

### Example

```python
name = "Rahul"
age = 18
print(f"{name} is {age} years old")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 11. Lists

<details>
<summary>View lesson slide</summary>

![11. Lists](<Lessons/11. Lists.png>)

</details>

### Overview

Lists are ordered, mutable collections. They can store multiple values, including mixed types. Use indexing, slicing, loops, and list operations to work with list data.

### Example

```python
items = ["pen", "book"]
items.append("bag")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 11.1. List Methods

<details>
<summary>View lesson slide</summary>

![11.1. List Methods](<Lessons/11.1. List Methods.png>)

</details>

### Overview

Useful list methods include `append()`, `extend()`, `insert()`, `remove()`, `pop()`, `clear()`, `index()`, `count()`, `sort()`, `reverse()`, and `copy()`.

### Example

```python
items = [3, 1, 2]
items.append(4)
items.sort()
removed = items.pop()

print(items)
print(removed)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 12. Tuples

<details>
<summary>View lesson slide</summary>

![12. Tuples](<Lessons/12. Tuples.png>)

</details>

### Overview

Tuples are ordered, immutable collections. They are useful for fixed data that should not be changed. A single-item tuple needs a trailing comma, such as `(5,)`.

### Example

```python
point = (10, 20)
x, y = point

print(x, y)

single_item = (5,)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 12.1. Tuples Methods

<details>
<summary>View lesson slide</summary>

![12.1. Tuples Methods](<Lessons/12.1. Tuples Methods.png>)

</details>

### Overview

Tuples have fewer methods because they are immutable. The main tuple methods are `count()` and `index()`. Tuples also support indexing, slicing, unpacking, and iteration.

### Example

```python
numbers = (1, 2, 2, 3)

print(numbers.count(2))
print(numbers.index(3))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 13. Docstrings

<details>
<summary>View lesson slide</summary>

![13. Docstrings](<Lessons/13. Docstrings.png>)

</details>

### Overview

Docstrings document modules, functions, classes, and methods. They are written as triple-quoted strings directly under a definition and can be accessed with `__doc__` or `help()`.

### Example

```python
def greet(name):
    """Return a greeting message."""
    return f"Hello, {name}"

print(greet.__doc__)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 14. Sets

<details>
<summary>View lesson slide</summary>

![14. Sets](<Lessons/14. Sets.png>)

</details>

### Overview

Sets are unordered collections of unique values. They are useful for removing duplicates and performing mathematical set operations like union, intersection, and difference.

### Example

```python
numbers = {1, 2, 2, 3}

print(numbers)
print(2 in numbers)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 14.1 Sets Methods

<details>
<summary>View lesson slide</summary>

![14.1 Sets Methods](<Lessons/14.1 Sets Methods.png>)

</details>

### Overview

Common set methods include `add()`, `remove()`, `discard()`, `pop()`, `clear()`, `union()`, `intersection()`, `difference()`, and `symmetric_difference()`.

### Example

```python
a = {1, 2, 3}
b = {3, 4, 5}

print(a.union(b))
print(a.intersection(b))
print(a.difference(b))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 15. Dictionary

<details>
<summary>View lesson slide</summary>

![15. Dictionary](<Lessons/15. Dictionary.png>)

</details>

### Overview

Dictionaries store key-value pairs. Keys must be unique and hashable. Dictionaries are ideal for structured data such as user profiles, settings, counts, and lookup tables.

### Example

```python
student = {"name": "Rahul", "age": 18}
print(student["name"])
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 15.1. Dictionary

<details>
<summary>View lesson slide</summary>

![15.1. Dictionary](<Lessons/15.1. Dictionary.png>)

</details>

### Overview

Access dictionary values with keys, update values by assignment, and use nested dictionaries for structured records. Use safe access with `get()` when a key may not exist.

### Example

```python
student = {"name": "Rahul", "age": 18}
student["age"] = 19
student["city"] = "Dubai"

print(student.get("email", "Not provided"))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 15.2. Dictionary Methods

<details>
<summary>View lesson slide</summary>

![15.2. Dictionary Methods](<Lessons/15.2. Dictionary Methods.png>)

</details>

### Overview

Useful dictionary methods include `keys()`, `values()`, `items()`, `get()`, `update()`, `pop()`, `popitem()`, `clear()`, `copy()`, and `setdefault()`.

### Example

```python
student = {"name": "Rahul", "age": 18}

for key, value in student.items():
    print(key, value)

student.update({"age": 19})
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 16. Exception Handling

<details>
<summary>View lesson slide</summary>

![16. Exception Handling](<Lessons/16. Exception Handling.png>)

</details>

### Overview

Exception handling keeps programs from crashing unexpectedly. Use `try` for risky code, `except` to handle errors, `else` for code that runs when no exception occurs, and `finally` for cleanup.

### Example

```python
try:
    number = int(input("Number: "))
except ValueError:
    print("Please enter a valid number")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 17. Exception Handling

<details>
<summary>View lesson slide</summary>

![17. Exception Handling](<Lessons/17. Exception Handling.png>)

</details>

### Overview

Exceptions can be handled specifically, such as `ValueError`, `TypeError`, or `ZeroDivisionError`. Catch specific exceptions before broad ones, and raise custom errors with `raise` when needed.

### Example

```python
def divide(a, b):
    if b == 0:
        raise ZeroDivisionError("Cannot divide by zero")
    return a / b

try:
    print(divide(10, 0))
except ZeroDivisionError as error:
    print(error)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 18. Virtual-Environment

<details>
<summary>View lesson slide</summary>

![18. Virtual-Environment](<Lessons/18. Virtual-Environment.png>)

</details>

### Overview

A virtual environment isolates project dependencies. Create one with `python -m venv`, activate it, install packages inside it, and record dependencies with a requirements file.

### Example

```bash
python -m venv .venv
source .venv/bin/activate
pip install requests
pip freeze > requirements.txt
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19 Modules

<details>
<summary>View lesson slide</summary>

![19 Modules](<Lessons/19 Modules.png>)

</details>

### Overview

Modules are Python files that contain reusable code. Import modules to use their variables, functions, and classes. Modules help organize larger programs.

### Example

```python
# math_utils.py
def add(a, b):
    return a + b

# main.py
import math_utils
print(math_utils.add(2, 3))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19.1. Import-Statement

<details>
<summary>View lesson slide</summary>

![19.1. Import-Statement](<Lessons/19.1. Import-Statement.png>)

</details>

### Overview

Python supports several import styles: `import module`, `import module as alias`, `from module import name`, and `from module import *`. Prefer explicit imports for readability.

### Example

```python
import math
from random import randint
import datetime as dt

print(math.sqrt(16))
print(randint(1, 10))
print(dt.date.today())
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19.2. Import __name__=__main__

<details>
<summary>View lesson slide</summary>

![19.2. Import __name__=__main__](<Lessons/19.2. Import __name__=__main__.png>)

</details>

### Overview

The `if __name__ == "__main__":` block lets a file run code only when executed directly, not when imported as a module.

### Example

```python
def main():
    print("Running directly")

if __name__ == "__main__":
    main()
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19.3. OS Module

<details>
<summary>View lesson slide</summary>

![19.3. OS Module](<Lessons/19.3. OS Module.png>)

</details>

### Overview

The `os` module interacts with the operating system. It can work with directories, paths, environment variables, and file operations. Prefer `pathlib` for modern path handling when possible.

### Example

```python
import os

print(os.getcwd())
print(os.listdir("."))

os.makedirs("example", exist_ok=True)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19.4. File Module

<details>
<summary>View lesson slide</summary>

![19.4. File Module](<Lessons/19.4. File Module.png>)

</details>

### Overview

File handling lets Python read and write files. Use `open()` with modes like `r`, `w`, `a`, and `x`. The `with` statement automatically closes files after use.

### Example

```python
with open("notes.txt", "w") as file:
    file.write("Hello")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 19.5. File Methods

<details>
<summary>View lesson slide</summary>

![19.5. File Methods](<Lessons/19.5. File Methods.png>)

</details>

### Overview

Common file methods include `read()`, `readline()`, `readlines()`, `write()`, `writelines()`, `seek()`, `tell()`, and `close()`.

### Example

```python
with open("notes.txt", "r") as file:
    first_line = file.readline()
    position = file.tell()

print(first_line)
print(position)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20. OOPs

<details>
<summary>View lesson slide</summary>

![20. OOPs](<Lessons/20. OOPs.png>)

</details>

### Overview

Object-oriented programming organizes code around classes and objects. Classes define attributes and methods; objects are instances of classes. OOP supports encapsulation, inheritance, and polymorphism.

### Example

```python
class Student:
    def __init__(self, name):
        self.name = name
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.1. Access Modifiers

<details>
<summary>View lesson slide</summary>

![20.1. Access Modifiers](<Lessons/20.1. Access Modifiers.png>)

</details>

### Overview

Python uses naming conventions for access control: public names, protected names with `_name`, and private name mangling with `__name`. These guide usage but do not create strict enforcement like some languages.

### Example

```python
class Account:
    def __init__(self):
        self.owner = "Rahul"   # public
        self._balance = 1000   # protected by convention
        self.__pin = "1234"    # private-style name mangling
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.2. Inheritance

<details>
<summary>View lesson slide</summary>

![20.2. Inheritance](<Lessons/20.2. Inheritance.png>)

</details>

### Overview

Inheritance lets one class reuse and extend another class. The child class inherits attributes and methods from the parent class and can add or override behavior.

### Example

```python
class Animal:
    def speak(self):
        print("Animal sound")

class Dog(Animal):
    def speak(self):
        print("Bark")

Dog().speak()
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.2.1. Inheritance Types

<details>
<summary>View lesson slide</summary>

![20.2.1. Inheritance Types](<Lessons/20.2.1. Inheritance Types.png>)

</details>

### Overview

Common inheritance types include single, multiple, multilevel, hierarchical, and hybrid inheritance. Multiple inheritance should be used carefully to keep class relationships understandable.

### Example

```python
class A:
    pass

class B(A):
    pass

class C(B):
    pass
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.3. Static Methods

<details>
<summary>View lesson slide</summary>

![20.3. Static Methods](<Lessons/20.3. Static Methods.png>)

</details>

### Overview

A static method belongs to a class namespace but does not receive `self` or `cls`. Use `@staticmethod` for helper behavior related to the class but independent of instance or class state.

### Example

```python
class Math:
    @staticmethod
    def add(a, b):
        return a + b
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.4. Instance vs Class Variables

<details>
<summary>View lesson slide</summary>

![20.4. Instance vs Class Variables](<Lessons/20.4. Instance vs Class Variables.png>)

</details>

### Overview

Instance variables belong to each object and are usually created with `self`. Class variables belong to the class and are shared by all instances unless shadowed on an object.

### Example

```python
class Student:
    school = "ABC School"  # class variable

    def __init__(self, name):
        self.name = name    # instance variable

student = Student("Rahul")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.5 Class Methods

<details>
<summary>View lesson slide</summary>

![20.5 Class Methods](<Lessons/20.5 Class Methods.png>)

</details>

### Overview

Class methods receive the class as `cls` and are decorated with `@classmethod`. They are useful for alternative constructors and behavior that needs class-level access.

### Example

```python
class User:
    count = 0

    @classmethod
    def total(cls):
        return cls.count
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 20.6. Super Keyword

<details>
<summary>View lesson slide</summary>

![20.6. Super Keyword](<Lessons/20.6. Super Keyword.png>)

</details>

### Overview

`super()` calls methods from a parent class, commonly inside `__init__`. It helps reuse parent initialization and behavior while extending it in child classes.

### Example

```python
class Person:
    def __init__(self, name):
        self.name = name

class Student(Person):
    def __init__(self, name, grade):
        super().__init__(name)
        self.grade = grade
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 21. Decorators Intro

<details>
<summary>View lesson slide</summary>

![21. Decorators Intro](<Lessons/21. Decorators Intro.png>)

</details>

### Overview

Decorators wrap functions or methods to add behavior without changing the original code. They are commonly used for logging, timing, validation, authentication, and properties.

### Example

```python
def decorator(func):
    def wrapper():
        print("Before")
        func()
        print("After")
    return wrapper

@decorator
def greet():
    print("Hello")

greet()
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 21.1. Decorators With Examples

<details>
<summary>View lesson slide</summary>

![21.1. Decorators With Examples](<Lessons/21.1. Decorators With Examples.png>)

</details>

### Overview

A decorator is a function that takes another function and returns a wrapped function. Use `@decorator_name` above a function to apply it cleanly.

### Example

```python
def logger(func):
    def wrapper(*args, **kwargs):
        print("Calling", func.__name__)
        return func(*args, **kwargs)
    return wrapper

@logger
def add(a, b):
    return a + b

print(add(2, 3))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 21.2. Getters and Setters

<details>
<summary>View lesson slide</summary>

![21.2. Getters and Setters](<Lessons/21.2. Getters and Setters.png>)

</details>

### Overview

Getters and setters control attribute access. In Python, use `@property` for getter behavior and `@name.setter` for controlled updates with validation.

### Example

```python
class Person:
    @property
    def age(self):
        return self._age

    @age.setter
    def age(self, value):
        if value < 0:
            raise ValueError("Age cannot be negative")
        self._age = value
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 22. dir, __dict__, help

<details>
<summary>View lesson slide</summary>

![22. dir, __dict__, help](<Lessons/22. dir, __dict__, help.png>)

</details>

### Overview

`dir()` lists available attributes and methods. `__dict__` shows an object's writable attributes. `help()` displays documentation for modules, classes, functions, and objects.

### Example

```python
name = "Python"
print(dir(name))

class Student:
    def __init__(self, name):
        self.name = name

student = Student("Rahul")
print(student.__dict__)
help(str)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 23. Dunder Methods

<details>
<summary>View lesson slide</summary>

![23. Dunder Methods](<Lessons/23. Dunder Methods.png>)

</details>

### Overview

Dunder methods are special methods surrounded by double underscores, such as `__init__`, `__str__`, `__repr__`, `__len__`, and `__call__`. They customize how objects behave with Python syntax.

### Example

```python
class Student:
    def __init__(self, name):
        self.name = name

    def __str__(self):
        return self.name

print(Student("Rahul"))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 24. Method Overriding

<details>
<summary>View lesson slide</summary>

![24. Method Overriding](<Lessons/24. Method Overriding.png>)

</details>

### Overview

Method overriding happens when a child class defines a method with the same name as a parent method. This lets the child class customize inherited behavior.

### Example

```python
class Shape:
    def area(self):
        return 0

class Square(Shape):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side * self.side
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 25. Operator Overloading

<details>
<summary>View lesson slide</summary>

![25. Operator Overloading](<Lessons/25. Operator Overloading.png>)

</details>

### Overview

Operator overloading uses dunder methods to define how custom objects respond to operators. Examples include `__add__` for `+`, `__sub__` for `-`, and `__eq__` for `==`.

### Example

```python
class Point:
    def __init__(self, x, y):
        self.x = x
        self.y = y

    def __add__(self, other):
        return Point(self.x + other.x, self.y + other.y)

first = Point(1, 2)
second = Point(3, 4)
result = first + second
print(result.x, result.y)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 26. Time Module

<details>
<summary>View lesson slide</summary>

![26. Time Module](<Lessons/26. Time Module.png>)

</details>

### Overview

The `time` module provides time-related functions such as `time()`, `sleep()`, `ctime()`, and `strftime()`. It is useful for delays, timestamps, and measuring elapsed time.

### Example

```python
import time

start = time.time()
time.sleep(1)
end = time.time()

print(end - start)
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 27. Walrus Operator

<details>
<summary>View lesson slide</summary>

![27. Walrus Operator](<Lessons/27. Walrus Operator.png>)

</details>

### Overview

The walrus operator `:=` assigns a value as part of an expression. It can reduce repetition in loops and conditionals, but should be used only when it improves readability.

### Example

```python
numbers = [1, 2, 3, 4, 5]

if (count := len(numbers)) > 3:
    print(f"List has {count} items")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 28. SHutil Module

<details>
<summary>View lesson slide</summary>

![28. SHutil Module](<Lessons/28. SHutil Module.png>)

</details>

### Overview

The `shutil` module performs high-level file operations such as copying, moving, deleting directory trees, and creating archives. Use destructive operations carefully.

### Example

```python
import shutil

shutil.copy("source.txt", "backup.txt")
shutil.move("backup.txt", "archive/backup.txt")
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 29. Requests Module

<details>
<summary>View lesson slide</summary>

![29. Requests Module](<Lessons/29. Requests Module.png>)

</details>

### Overview

The `requests` module sends HTTP requests. Common methods include `get()`, `post()`, `put()`, and `delete()`. Responses include status codes, headers, text, JSON, and content.

### Example

```python
import requests

response = requests.get("https://api.github.com")
print(response.status_code)
print(response.json())
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## 30. Generators

<details>
<summary>View lesson slide</summary>

![30. Generators](<Lessons/30. Generators.png>)

</details>

### Overview

Generators produce values lazily using `yield`. They save memory because values are generated one at a time instead of all at once. Generator expressions provide a compact syntax.

### Example

```python
def count_up_to(n):
    for value in range(1, n + 1):
        yield value
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.

## Mini Projects

<details>
<summary>View lesson slide</summary>

![Mini Projects](<Lessons/Mini Projects.png>)

</details>

### Overview

Mini projects combine multiple Python concepts into practical programs. They help reinforce syntax, problem solving, input/output, conditionals, loops, functions, modules, and data structures.

### Example

```python
def add(a, b):
    return a + b

print(add(10, 5))
```

### Best Practices

- Use clear names and readable structure.
- Prefer the simplest readable syntax for the situation.
- Refer to the slide image above for the complete visual summary.
