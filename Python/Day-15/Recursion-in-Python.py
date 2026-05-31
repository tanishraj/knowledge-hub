"""
Recursion in Python
Recursion is a programming technique where a function calls itself in order to solve a problem. 
It typically involves a base case that stops the recursion and a recursive case that breaks 
the problem into smaller subproblems.
"""

# Example of a recursive function to calculate the factorial of a number
def factorial(n):
    # Base case: if n is 0 or 1, return 1
    if n == 0 or n == 1:
        return 1
    # Recursive case: n! = n * (n-1)!
    else:
        return n * factorial(n - 1)
    
# Example usage
print("Factorial of 5:", factorial(5))  # Output: 120



# Example of a recursive function to calculate the nth Fibonacci number
def fibonacci(n):
    # Base case: if n is 0, return 0; if n is 1, return 1
    if n == 0:
        return 0
    elif n == 1:
        return 1
    # Recursive case: F(n) = F(n-1) + F(n-2)
    else:
        return fibonacci(n - 1) + fibonacci(n - 2)
    
# Example usage
print("10th Fibonacci number:", fibonacci(10))  # Output: 55