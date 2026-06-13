"""
Divisors
Create a program that asks the user for a number and then 
prints out a list of all the divisors of that number. 
(If you don’t know what a divisor is, it is a number that 
divides evenly into another number. For example, 13 is a 
divisor of 26 because 26 / 13 has no remainder.)
"""

num = int(input("Please choose a number to divide: "))
divisor_list = []

for n in range(1, num + 1):
    if num % n == 0:
        divisor_list.append(n)

print(divisor_list)

# One Liner
number = int(input("Please choose a number to divide: "))
print([num for num in range(1, number + 1) if number % num == 0])