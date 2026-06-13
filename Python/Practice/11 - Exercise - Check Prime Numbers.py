"""
Check Primality Functions
Ask the user for a number and determine whether the number is prime or not. (For those who have forgotten, a prime number is a number that has no divisors.). You can (and should!) use your answer to Exercise 4 to help you.
"""

def check_prime(num):
    if num < 0 or num == 0 or num == 1:
        return False
    for i in range(2, int(num ** 0.5) + 1):
        if num % i == 0:
            return False
    
    return True

num = int(input("Enter a number:"))
print(check_prime(num))
