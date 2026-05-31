"""
Python Operators
Operators in Python are special symbols that perform specific operations on operands (variables and values). 
Python has several types of operators, including:
1) Arithmetic Operators: +, -, *, /, %, **, //
2) Comparison Operators: ==, !=, >, <, >=, <=
3) Logical Operators: and, or, not
4) Assignment Operators: =, +=, -=, *=, /=, %=, **=, //=
5) Bitwise Operators: &, |, ^, ~, <<, >>
6) Identity Operators: is, is not
7) Membership Operators: in, not in
"""

# Arithmetic Operators
print(10 + 5) # Output: 15
print(10 - 5) # Output: 5
print(10 * 5) # Output: 50
print(10 / 5) # Output: 2.0
print(10 % 3) # Output: 1
print(2 ** 3) # Output: 8
print(10 // 3) # Output: 3


# Comparison Operators
print(10 == 5) # Output: False
print(10 != 5) # Output: True
print(10 > 5) # Output: True
print(10 < 5) # Output: False
print(10 >= 5) # Output: True
print(10 <= 5) # Output: False


# Logical Operators
print(True and False) # Output: False
print(True or False) # Output: True
print(not True) # Output: False
print(1 and 10) # Output: 10
print(0 or 10) # Output: 10
print(1 or 10) # Output: 1
print(-1 or 10) # Output: -1
print(False or 10) # Output: 10
print(True or 10) # Output: True


# Assignment Operators
a = 10
a += 5 # equivalent to a = a + 5
print(a) # Output: 15
a -= 5 # equivalent to a = a - 5
print(a) # Output: 10
a *= 5 # equivalent to a = a * 5
print(a) # Output: 50
a /= 5 # equivalent to a = a / 5
print(a) # Output: 10.0
a %= 3 # equivalent to a = a % 3
print(a) # Output: 1.0
a **= 3 # equivalent to a = a ** 3
print(a) # Output: 1.0
a //= 3 # equivalent to a = a // 3
print(a) # Output: 0.0
a %= 3 # equivalent to a = a % 3
print(a) # Output: 0.0


# Bitwise Operators
print(5 & 3) # Output: 1
#Explanation:
# 5 in binary is 101
# 3 in binary is 011
# 5 & 3 will perform a bitwise AND operation on the binary representations of 5 and 3, which will result in 001 (1 in decimal)

print(5 | 3) # Output: 7
#Explanation:
# 5 in binary is 101
# 3 in binary is 011
# 5 | 3 will perform a bitwise OR operation on the binary representations of 5 and 3, which will result in 111 (7 in decimal)   

print(5 ^ 3) # Output: 6
#Explanation:
# 5 in binary is 101
# 3 in binary is 011
# 5 ^ 3 will perform a bitwise XOR operation on the binary representations of 5 and 3, which will result in 110 (6 in decimal)

print(~5) # Output: -6
#Explanation:
# 5 in binary is 101
# ~5 will perform a bitwise NOT operation on the binary representation of 5, which will result in 010 (2 in decimal). However, since the result is negative, it will be represented in two's complement form, which is -6 in decimal.

print(5 << 1) # Output: 10
#Explanation:
# 5 in binary is 101
# 5 << 1 will perform a left shift operation on the binary representation of 5, which will shift all bits to the left by 1 position, resulting in 1010 (10 in decimal)

print(5 >> 1) # Output: 2
#Explanation:
# 5 in binary is 101
# 5 >> 1 will perform a right shift operation on the binary representation of 5, which will shift all bits to the right by 1 position, resulting in 10 (2 in decimal)


# Identity Operators
print(5 is 5) # Output: True
print(5 is not 5) # Output: False
print(5 is 10) # Output: False
print(5 is not 10) # Output: True

# Membership Operators
print(5 in [1, 2, 3, 4, 5]) # Output: True
print(10 in [1, 2, 3, 4, 5]) # Output: False
print(5 not in [1, 2, 3, 4, 5]) # Output: False
print(10 not in [1, 2, 3, 4, 5]) # Output: True


"""Gotchas:
1) The 'is' operator checks for identity, not equality. It checks if two variables point to the same object in memory, not if they have the same value. For example:
a = [1, 2, 3]
b = [1, 2, 3]
print(a == b) # Output: True (because they have the same value)
print(a is b) # Output: False (because they are different objects in memory)

2) The 'not' operator has a higher precedence than 'and' and 'or'. This means that if you use 'not' in a logical expression, it will be evaluated before 'and' and 'or'. For example:
print(not True and False) # Output: False (because 'not True' is evaluated first, resulting in False, and then 'False and False' is evaluated, resulting in False)
print(not True or False) # Output: False (because 'not True' is evaluated first, resulting in False, and then 'False or False' is evaluated, resulting in False)

Example:
a = 10
b = 20
print(a > 5 and b < 30) # Output: True (because both conditions are true)
print(a > 15 or b < 30) # Output: True (because one of the conditions is true)
print(not (a > 15 or b < 30)) # Output: False (because 'a > 15 or b < 30' is evaluated first, resulting in True, and then 'not True' is evaluated, resulting in False)
"""