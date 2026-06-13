"""
String Lists
Ask the user for a string and print out whether this string is a palindrome or not. 
(A palindrome is a string that reads the same forwards and backwards.)
"""

# Naive Approach
def is_palindrome(text):
    for char in text:
        print(f"{char} != {text[-1 - text.index(char)]}")
        if char != text[-1 - text.index(char)]:
            return False
    return True

text = input("Enter a string: ")
print(is_palindrome(text))



# Better Approach
def is_palindrome(text):
    return text == text[::-1]

text = input("Enter a string: ")
print(is_palindrome(text))


# One liner
print(True if (text := input("Enter a string: ")) == text[::-1] else False)