"""
List Comprehensions:
Let’s say I give you a list saved in a variable: 
a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]. 

Write one line of Python that takes this list a and makes a new list 
that has only the even elements of this list in it.
"""

# Naive Approach
def even_numbers(lst):
    even_lst = []
    for num in lst:
        if num % 2 == 0:
            even_lst.append(num)
    return even_lst

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print(even_numbers(a))


# Slightly Better Approach
def even_numbers(lst):
    even_lst = []
    for num in lst:
        even_lst.append(num) if num % 2 == 0 else even_lst
    return even_lst

a = [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
print(even_numbers(a))



# One Liner
print([x for x in a if x % 2 == 0])