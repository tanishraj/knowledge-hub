"""
Custom Exceptions
If Python's built-in errors don't precisely describe your problem, 
you can create your own by creating a class that inherits from the 
built-in Exception class.
"""

class BalanceInsufficientError(Exception):
    """Exception raised when a withdrawal amount exceeds the balance."""
    pass;

def withdraw_money(balance, amount):
    if balance < amount:
        raise BalanceInsufficientError(f"You tried to withdraw ${amount} but only have ${balance}.")
    return balance - amount;

# using custom exception
try:
    withdraw_money(50, 100)
except BalanceInsufficientError as e:
    print(f"Transaction Denied: {e}")

