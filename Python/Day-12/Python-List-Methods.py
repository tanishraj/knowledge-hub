"""
List Methods in Python
Python has a set of built-in methods that you can use on lists.
Method	Description
append()    Adds an element at the end of the list
clear()	Removes all the elements from the list
copy()	Returns a copy of the list
count()	Returns the number of elements with the specified value
extend()	Add the elements of a list (or any iterable), to the end of the current list
index()	Returns the index of the first element with the specified value
insert()	Adds an element at the specified position
pop()	Removes the element at the specified position
remove()	Removes the first item with the specified value
reverse()	Reverses the order of the list
sort()	Sorts the list
"""

# List Methods
thislist = ["apple", "banana", "cherry"]
thislist.append("orange") # Adds "orange" to the end of the list
print(thislist) # Output: ['apple', 'banana', 'cherry', 'orange

thislist.clear() # Removes all the elements from the list
print(thislist) # Output: []

thislist = ["apple", "banana", "cherry"]
thislist.copy() # Returns a copy of the list
print(thislist) # Output: ['apple', 'banana', 'cherry']

thislist = ["apple", "banana", "cherry", "apple"]
x = thislist.count("apple") # Returns the number of elements with the specified value
print(x) # Output: 2

thislist = ["apple", "banana", "cherry"]
tropical = ["mango", "pineapple", "papaya"]
thislist.extend(tropical) # Add the elements of tropical to the end of thislist
print(thislist) # Output: ['apple', 'banana', 'cherry', 'mango', 'pineapple', 'papaya']

thislist = ["apple", "banana", "cherry"]
x = thislist.index("banana") # Returns the index of the first element with the specified value
print(x) # Output: 1

thislist = ["apple", "banana", "cherry"]
thislist.insert(1, "orange") # Adds "orange" at index 1
print(thislist) # Output: ['apple', 'orange', 'banana', 'cherry']

thislist = ["apple", "banana", "cherry"]
thislist.pop(1) # Removes the element at index 1
print(thislist) # Output: ['apple', 'cherry']

thislist = ["apple", "banana", "cherry"]
thislist.remove("banana") # Removes the first item with the specified value
print(thislist) # Output: ['apple', 'cherry']

thislist = ["apple", "banana", "cherry"]
thislist.reverse() # Reverses the order of the list
print(thislist) # Output: ['cherry', 'banana', 'apple']

thislist = ["apple", "banana", "cherry"]
thislist.sort() # Sorts the list
print(thislist) # Output: ['apple', 'banana', 'cherry']

# List Length
thislist = ["apple", "banana", "cherry"]
print(f"Length of this list is: {len(thislist)} and the content is given below:")
for x in thislist:
  print(x)

