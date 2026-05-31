"""
Python List
A list is a collection which is ordered and changeable. In Python, lists are written with square brackets.
Example
Create a List:
thislist = ["apple", "banana", "cherry"]
print(thislist)
Output:
['apple', 'banana', 'cherry']
List Items
List items are ordered, changeable, and allow duplicate values.
List items are indexed, the first item has index [0], the second item has index [1] etc.
List Length
"""

thislist = ["apple", "banana", "cherry"]
print(f"Length of this list is: {len(thislist)} and the content is given below:")
for x in thislist:
  print(x)


# List Items - Data Types
list1 = ["apple", "banana", "cherry"] # list of strings
list2 = [1, 5, 7, 9, 3] # list of integers
list3 = [True, False, False] # list of booleans
list4 = ["abc", 34, True, 40, "male"] # list of mixed data types
print(list1)
print(list2)
print(list3)
print(list4)


# Indexing
thislist = ["apple", "banana", "cherry"]
print(thislist[0]) # Output: apple
print(thislist[1]) # Output: banana
print(thislist[2]) # Output: cherry

# Negative Indexing
thislist = ["apple", "banana", "cherry"]
print(thislist[-1]) # Output: cherry
print(thislist[-2]) # Output: banana
print(thislist[-3]) # Output: apple

# How Negative Indexing Works
thislist = ["apple", "banana", "cherry"]
print(thislist[len(thislist)-1]) # Output: cherry
print(thislist[len(thislist)-2]) # Output: banana
print(thislist[len(thislist)-3]) # Output: apple


# Strings are Arrays
a = "Hello, World!"
print(a[1]) # Output: e
print(a[0]) # Output: H
print(a[7]) # Output: W
print(a[-1]) # Output: !
print(a[-5]) # Output: o


# JumpIndexing
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[2:5]) # Output: ['cherry', 'orange', 'kiwi']
print(thislist[:4]) # Output: ['apple', 'banana', 'cherry', 'orange']
print(thislist[2:]) # Output: ['cherry', 'orange', 'kiwi', 'melon', 'mango']
# Negative Jump Indexing
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[-4:-1]) # Output: ['orange', 'kiwi', 'melon']
print(thislist[-4:]) # Output: ['orange', 'kiwi', 'melon', 'mango']
print(thislist[:-4]) # Output: ['apple', 'banana', 'cherry']

# With 3 Parameters
thislist = ["apple", "banana", "cherry", "orange", "kiwi", "melon", "mango"]
print(thislist[1:5:2]) # Output: ['banana', 'orange']
print(thislist[::2]) # Output: ['apple', 'cherry', 'kiwi', 'mango']
print(thislist[1::2]) # Output: ['banana', 'orange', 'melon']


# List Comprehension
fruits = ["apple", "banana", "cherry", "kiwi", "melon"]
newlist = [x for x in fruits if "a" in x]
print(newlist) # Output: ['apple', 'banana']
newlist = [x for x in fruits if x != "apple"]
print(newlist) # Output: ['banana', 'cherry', 'kiwi', 'melon']
newlist = [x for x in fruits]
print(newlist) # Output: ['apple', 'banana', 'cherry', 'kiwi', 'melon']
newlist = [x for x in range(10) if x < 5]
print(newlist) # Output: [0, 1, 2, 3, 4]