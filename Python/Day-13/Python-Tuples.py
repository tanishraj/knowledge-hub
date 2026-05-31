"""
Tuples in Python
A tuple is a collection which is ordered and unchangeable. In Python tuples are written with round brackets.

Features of Tuples:
1. Ordered: The items in a tuple have a defined order, and that order will not change.
2. Unchangeable: Tuples cannot be changed after they have been created. You cannot add, remove, or change items in a tuple after it has been created.
3. Allow Duplicates: Since tuples are indexed, they can have items with the same value.
4. Tuple Length: The number of items in a tuple is determined using the len() function.

Example
Create a Tuple:
thistuple = ("apple", "banana", "cherry")
print(thistuple)
Output:
('apple', 'banana', 'cherry')
Note: Tuples are unchangeable, meaning that you cannot change, 
add, or remove items after the tuple has been created.
Tuples allow duplicate values:

Example
Create a Tuple with duplicate values:
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple)
Output:
('apple', 'banana', 'cherry', 'apple', 'cherry')
Tuple Length
To determine how many items a tuple has, use the len() function:

Example
Print the number of items in the tuple:
thistuple = ("apple", "banana", "cherry")
print(len(thistuple))
Output:
3
"""

# Create a Tuple
thistuple = ("apple", "banana", "cherry")
print(thistuple)

# Create a Tuple with duplicate values
thistuple = ("apple", "banana", "cherry", "apple", "cherry")
print(thistuple) # Output: ('apple', 'banana', 'cherry', 'apple', 'cherry')

# Print the number of items in the tuple
thistuple = ("apple", "banana", "cherry")
print(len(thistuple)) # Output: 3

