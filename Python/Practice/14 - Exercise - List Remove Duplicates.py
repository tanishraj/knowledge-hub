"""
List Remove Duplicates
Write a program (function!) that takes a list and returns a new 
list that contains all the elements of the first list minus all the duplicates.

Extras:
Write two different functions to do this - one using a loop and constructing 
a list, and another using sets.
Go back and do Exercise 5 using sets, and write the solution for that in a 
different function.
"""

# Using a loop to remove duplicates
def remove_duplicates_loop(lst):
    unique_list = []
    for item in lst:
        if item not in unique_list:
            unique_list.append(item)
    return unique_list

list_with_duplicates = [1, 2, 3, 2, 4, 1, 5]
result_loop = remove_duplicates_loop(list_with_duplicates)
print(result_loop)


# Using sets to remove duplicates
def remove_duplicates_sets(lst):
    return list(set(lst))   
result_sets = remove_duplicates_sets(list_with_duplicates)
print(result_sets)

# Exercise 5 using sets
print(list(set(list_with_duplicates)))