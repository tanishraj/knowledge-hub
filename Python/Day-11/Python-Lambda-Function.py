"""
Lambda Fuction:
A lambda function is small, nameless function defined using the lambda keyword.

Features:
1) Can work similar to existing def functions
2) Its anonymous (nameless)
3) useful for short simple operation
4) Often used as arguments to high order functions
"""

# Naive Approach
def square(x):
    return x * x

# Lambda Function
square = lambda x: x * x

print(square(5)) # 25

# using lambda function using builtin functions

# 1. map():
nums = [1,2,3,4]
squared = list(map(lambda x: x ** 2, nums))
print(squared)

# 2. filter()
names = ["Tanish", "Vaishali", "Chandan", "Shivam", "Manu", "Tanu"]
filteredNames = lambda text: list(filter(lambda name: text in name, names))
print(filteredNames("Tan")) # ['Tanish', 'Tanu']
print(filteredNames("u")) # ['Manu', 'Tanu']

# 3. reduce()
from functools import reduce
nums = [1,2,3,4,5,6,7]
sumAll = reduce(lambda x, y: x + y, nums)
print(sumAll) # 28