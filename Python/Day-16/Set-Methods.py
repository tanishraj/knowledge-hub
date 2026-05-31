"""
Set Methods in Python
Python provides several built-in methods for working with sets. 
Here are some of the most commonly used set methods:

1. add(elem): Adds an element to the set.
my_set.add(4)
2. remove(elem): Removes an element from the set. Raises KeyError if the element is not found.
my_set.remove(2)
3. discard(elem): Removes an element from the set if it is present. Does not raise an error if the element is not found.
my_set.discard(2)
4. pop(): Removes and returns an arbitrary element from the set. Raises KeyError if the set is empty.
my_set.pop()
5. clear(): Removes all elements from the set.
my_set.clear()
6. union(*others): Returns a new set that is the union of the set and the specified sets.
set1.union(set2)
7. intersection(*others): Returns a new set that is the intersection of the set and the specified sets.
set1.intersection(set2)
8. difference(*others): Returns a new set that is the difference of the set and the specified sets.
set1.difference(set2)
9. symmetric_difference(other): Returns a new set that is the symmetric difference of the set and the specified set.
set1.symmetric_difference(set2)
10. issubset(other): Returns True if the set is a subset of the specified set.
set1.issubset(set2)
11. issuperset(other): Returns True if the set is a superset of the specified set.
set1.issuperset(set2)
12. isdisjoint(other): Returns True if the set has no elements in common with the specified set.
set1.isdisjoint(set2)
13. copy(): Returns a shallow copy of the set.
new_set = my_set.copy()
14. len(s): Returns the number of elements in the set.
len(my_set)
15. in: Checks if an element is in the set.
if 3 in my_set:
    print("3 is in the set")
16. not in: Checks if an element is not in the set.
if 5 not in my_set:
    print("5 is not in the set")
17. iterating over a set: You can iterate over the elements of a set using a for loop.
for element in my_set:
    print(element)
18. set comprehension: You can create a new set using a set comprehension.
squared_set = {x**2 for x in range(5)}

update(): Updates the set with the union of itself and others.
my_set.update(set2)

intersection_update(): Updates the set with the intersection of itself and others.
my_set.intersection_update(set2)

difference_update(): Updates the set with the difference of itself and others.
my_set.difference_update(set2)

symmetric_difference_update(): Updates the set with the symmetric difference of itself and another.
my_set.symmetric_difference_update(set2)

isdisjoint(): Returns True if the set has no elements in common with another set.
set1.isdisjoint(set2)

issubset(): Returns True if the set is a subset of another set.
set1.issubset(set2)

issuperset(): Returns True if the set is a superset of another set.
set1.issuperset(set2)
"""

# All points examples below...

my_set = {1, 2, 3}
print("Initial set:", my_set)

my_set.add(4)
print("After adding 4:", my_set)

my_set.remove(2)
print("After removing 2:", my_set)

set1 = {1, 2, 3}
set2 = {3, 4, 5}
print("Union:", set1.union(set2))
print("Intersection:", set1.intersection(set2))
print("Difference:", set1.difference(set2))
print("Symmetric Difference:", set1.symmetric_difference(set2))

if 3 in my_set:
    print("3 is in the set")

squared_set = {x**2 for x in range(5)}
print("Squared set:", squared_set)

my_set.update(set2)
print("After update with set2:", my_set)

my_set.intersection_update(set2)
print("After intersection update with set2:", my_set)

my_set.difference_update(set2)
print("After difference update with set2:", my_set)

my_set.symmetric_difference_update(set2)
print("After symmetric difference update with set2:", my_set)
print("Is set1 disjoint with set2?", set1.isdisjoint(set2))
print("Is set1 a subset of set2?", set1.issubset(set2))
print("Is set1 a superset of set2?", set1.issuperset(set2))

