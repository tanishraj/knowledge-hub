"""
Docstrings in Python
A docstring is a string literal that occurs as the first statement in a module, function, class, or method definition. 
It is used to document the purpose and behavior of the code it describes. 
Docstrings are enclosed in triple quotes (""" """) and can span multiple lines.
"""

# Example of a function with a docstring
def add(a, b):
    """
    This function takes two numbers as input and returns their sum.
    
    Parameters:
    a (int or float): The first number.
    b (int or float): The second number.
    
    Returns:
    int or float: The sum of a and b.
    """
    return a + b

# Example of a class with a docstring
class Calculator:
    """
    A simple calculator class that provides basic arithmetic operations.
    """
    
    def add(self, a, b):
        """
        Returns the sum of a and b.
        """
        return a + b
    
    def subtract(self, a, b):
        """
        Returns the difference of a and b.
        """
        return a - b
    
    def multiply(self, a, b):
        """
        Returns the product of a and b.
        """
        return a * b
    
    def divide(self, a, b):
        """
        Returns the quotient of a and b. Raises an error if b is zero.
        """
        if b == 0:
            raise ValueError("Cannot divide by zero.")
        return a / b
    
# Accessing docstrings
print(add.__doc__)
print(Calculator.__doc__)
print(Calculator.add.__doc__)