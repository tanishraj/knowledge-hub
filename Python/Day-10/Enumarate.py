"""
Python enumerate()
enumerate() is a built in function that lets you loop through a list
or any iterable and keep track of both the index (count) and the item
at the same time.

Syntax:
enumerate(iterator, start=0)
iterator: The collection of items that you want to loop through (list, tuple, string)
start: The number you want the counter to start from. Default is 0.
"""

# Example for List
name_list = ["Ram", "Shyam", "Deepak", "Sonu", "Hari"]

for index, name in enumerate(name_list, start=1):
    print(f"{index}. {name}")
""" 
Output:
1. Ram
2. Shyam
3. Deepak
4. Sonu
5. Hari
"""


