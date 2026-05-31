"""
Python Match Case Statement
The match case statement is a powerful control flow structure in Python that allows you to match patterns against values. 
It is similar to the switch-case statement found in other programming languages but offers more flexibility and expressiveness.
The match case statement is introduced in Python 3.10 and provides a way to handle multiple cases based on the value of an expression.
The basic syntax of the match case statement is as follows:

match expression:
    case pattern1:
        # code to execute if pattern1 matches
    case pattern2:
        # code to execute if pattern2 matches
    case _:
        # code to execute if no patterns match (optional)

In this syntax, the match statement evaluates the expression and compares it against each case pattern. 
If a pattern matches, the corresponding block of code is executed. The underscore (_) is used as a wildcard to match any value that does not match any of the specified patterns.
"""

# Month number to month name using match case statement
month_number = int(input("Enter month number (1-12): "));

match month_number:
    case 1:
        print("January")
    case 2:
        print("February")
    case 3:
        print("March")
    case 4:
        print("April")
    case 5:
        print("May")
    case 6:
        print("June")
    case 7:
        print("July")
    case 8:
        print("August")
    case 9:
        print("September")
    case 10:
        print("October")
    case 11:
        print("November")
    case 12:
        print("December")
    case _:
        print("Invalid month number")


