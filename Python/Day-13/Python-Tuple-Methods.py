"""
Tuples Methods in Python
1. count() - This method returns the number of times a specified value appears in the tuple.
2. index() - This method returns the index of the first occurrence of a specified value in the tuple. 
If the value is not found, it raises a ValueError.
3. len() - This function returns the number of items in a tuple.
4. max() - This function returns the largest item in a tuple.
5. min() - This function returns the smallest item in a tuple.
6. sorted() - This function returns a new sorted list from the items in a tuple.
7. sum() - This function returns the sum of all items in a tuple (only for numeric tuples).
8. any() - This function returns True if any item in the tuple is true, otherwise it returns False.
9. all() - This function returns True if all items in the tuple are true, otherwise it returns False.
10. zip() - This function takes iterables (can be zero or more), aggregates them in a tuple, and returns it.
11. enumerate() - This function adds a counter to an iterable and returns it as an enumerate object.
12. tuple() - This function converts an iterable (like a list) into a tuple.
13. reversed() - This function returns a reversed iterator of the tuple.
14. hash() - This function returns the hash value of a tuple, which is used for dictionary keys and set elements.
15. __add__() - This method allows you to concatenate two tuples using the + operator.
16. __mul__() - This method allows you to repeat a tuple a specified number of times using the * operator.
"""

# Example 1: Using count()
my_tuple = (1, 2, 3, 4, 2, 5)
print(my_tuple.count(2))  # Output: 2

# Example 2: Using index()
print(my_tuple.index(3))  # Output: 2

# Example 3: Using len()
print(len(my_tuple))  # Output: 6

# Example 4: Using max() and min()
print(max(my_tuple))  # Output: 5
print(min(my_tuple))  # Output: 1

# Example 5: Using sorted()
print(sorted(my_tuple))  # Output: [1, 2, 2, 3, 4, 5]

# Example 6: Using sum()
numeric_tuple = (1, 2, 3, 4, 5)
print(sum(numeric_tuple))  # Output: 15

# Example 7: Using any() and all()
bool_tuple = (True, False, True)
print(any(bool_tuple))  # Output: True
print(all(bool_tuple))  # Output: False

# Example 8: Using zip()
tuple1 = (1, 2, 3)
tuple2 = ('a', 'b', 'c')
zipped = zip(tuple1, tuple2)
print(list(zipped))  # Output: [(1, 'a'), (2, 'b'), (3, 'c')]

# Example 9: Using enumerate()
for index, value in enumerate(my_tuple):
    print(f"Index: {index}, Value: {value}")
# Output:
# Index: 0, Value: 1
# Index: 1, Value: 2
# Index: 2, Value: 3
# Index: 3, Value: 4
# Index: 4, Value: 2
# Index: 5, Value: 5

# Example 10: Using tuple()
my_list = [1, 2, 3]
my_tuple_from_list = tuple(my_list)
print(my_tuple_from_list)  # Output: (1, 2, 3)

# Example 11: Using reversed()
print(tuple(reversed(my_tuple)))  # Output: (5, 2, 4, 3, 2, 1)  

# Example 12: Using hash()
print(hash(my_tuple))  # Output: A unique hash value for the tuple

# Example 13: Using __add__() and __mul__()
tuple_a = (1, 2, 3)
tuple_b = (4, 5, 6)
print(tuple_a + tuple_b)  # Output: (1, 2, 3, 4, 5, 6)
print(tuple_a * 2)  # Output: (1, 2, 3, 1, 2, 3)
