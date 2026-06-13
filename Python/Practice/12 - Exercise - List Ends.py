"""
List Ends:
Write a program that takes a list of numbers 
(for example, a = [5, 10, 15, 20, 25]) and makes a 
new list of only the first and last elements of 
the given list. 

For practice, write this code inside a function.
"""

def list_ends(lst):
    if len(lst) < 2:
        return lst
    else:
        return [lst[0], lst[-1]]

a = [5, 10, 15, 20, 25]
result = list_ends(a)
print(result)


# One Liner Solution
a = [5, 10, 15, 20, 25]
result = [a[0], a[-1]] if len(a) >= 2 else a
print(result)


# Another One Liner Solution using slicing
a = [5, 10, 15, 20, 25]
result = a[:1] + a[-1:] if len(a) >= 2 else a
print(result)


# using list comprehension
a = [5, 10, 15, 20, 25]
result = [a[i] for i in (0, -1)] if len(a) >= 2 else a
print(result)