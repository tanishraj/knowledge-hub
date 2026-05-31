"""
Python Error Handling
Error handling in python is managed using exeception.
An execption is an error that happend during the execution of a program.
which disrupts the normal flow of instruction. Python uses the try..except block
to catch and handle these exceptions so your program does not crash.

There are 4 keywords that are used in exception handling...
1) try: block of code where you expect the error might happen
2) except: block of code that runs when any error happens
3) else: block of code that runs when no error happens
4) finally: block of code that always runs, regardless there was an error or no error
"""

# Example to produce Exception
def division():
    try:
        numerator = int(input("Enter numerator:"))
        denominator = int(input("Enter denominator:"))
        result = numerator/denominator;

    except ZeroDivisionError:
        print("Error: you can not divide by zero.")

    except ValueError:
        print("Error: please enter a valid integer")

    else:
        print(f"Success: Result is {result}")

    finally:
        print("This is execute at the end anyways")

# division();


# Example to catch all error with one handler
def division2():
    try:
        numerator = int(input("Enter numerator:"))
        denominator = int(input("Enter denominator:"))
        result = numerator/denominator;

    except Exception:
        print("Something went wrong during calculation.")

division2();
