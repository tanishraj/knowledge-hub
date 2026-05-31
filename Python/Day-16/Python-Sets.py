"""
Sets in Python
A set is an unordered collection of unique elements. 
It is defined using curly braces {} or the built-in set() function. 
Sets are mutable, meaning you can add or remove elements from them.
But they do not support indexing or slicing like lists or tuples.

Key features of sets:
1. Unordered: The elements in a set do not have a specific order.
2. Unique: A set cannot contain duplicate elements.
3. Mutable: You can add or remove elements from a set.
4. No indexing: You cannot access elements in a set using an index.

Basic Modification Methods:
1. add(elem): Adds an element to the set.
2. remove(elem): Removes an element from the set. Raises KeyError if the element is not found.
3. discard(elem): Removes an element from the set if it is present. Does not raise an error if the element is not found.
4. pop(): Removes and returns an arbitrary element from the set. Raises KeyError if the set is empty.
5. clear(): Removes all elements from the set.

Mathematical Set Operations:
1. union(*others): Returns a new set that is the union of the set and the specified sets.
2. intersection(*others): Returns a new set that is the intersection of the set and the specified sets.
3. difference(*others): Returns a new set that is the difference of the set and the specified sets.
4. symmetric_difference(other): Returns a new set that is the symmetric difference of the set and the specified set.
5. issubset(other): Returns True if the set is a subset of the specified set.
6. issuperset(other): Returns True if the set is a superset of the specified set.
7. isdisjoint(other): Returns True if the set has no elements in common with the specified set.

Other Set Operations:
1. copy(): Returns a shallow copy of the set.
2. len(s): Returns the number of elements in the set.
3. in: Checks if an element is in the set.
4. not in: Checks if an element is not in the set.
5. iterating over a set: You can iterate over the elements of a set using a for loop.
6. set comprehension: You can create a new set using a set comprehension.

Update Methods:
1. update(): Updates the set with the union of itself and others.
2. intersection_update(): Updates the set with the intersection of itself and others.
3. difference_update(): Updates the set with the difference of itself and others.
4. symmetric_difference_update(): Updates the set with the symmetric difference of itself and another.
5. isdisjoint(): Returns True if the set has no elements in common with another set.
"""


# Example for add() method
fruits = {"apple", "banana"}
fruits.add("cherry")
print(fruits)  # {'banana', 'cherry', 'apple'} (order may vary)

fruits.add("apple")  # Duplicate element
print(fruits)  # {'banana', 'cherry', 'apple'} (no change)



# Example for update() method
numbers = {1, 2}
numbers.update([3, 4, 5])  # Passing a list
print(numbers)  # {1, 2, 3, 4, 5}

numbers.update((5, 6, 7))  # Passing a tuple (5 is a duplicate)
print(numbers)  # {1, 2, 3, 4, 5, 6, 7}



# Example for remove() method
colors = {"red", "green", "blue"}
colors.remove("green")
print(colors)  # {'red', 'blue'}
# colors.remove("yellow")  # Throws KeyError: 'yellow'



# discard() method example
colors = {"red", "green", "blue"}
colors.discard("blue")
print(colors)  # {'red', 'green'}

colors.discard("yellow")  # Safe! Does nothing.
print(colors)  # {'red', 'green'}



# pop() method example
letters = {"a", "b", "c"}
removed_item = letters.pop()

print(removed_item)  # e.g., 'b'
print(letters)       # e.g., {'a', 'c'}



# clear() method example
items = {"laptop", "mouse", "keyboard"}
items.clear()
print(items)  # set() (An empty set container)



# union(*others) / | operator example
group_a = {"Alice", "Bob"}
group_b = {"Bob", "Charlie"}

all_students = group_a.union(group_b)
# Alternative operator syntax: all_students = group_a | group_b
print(all_students)  # {'Alice', 'Bob', 'Charlie'}


# Example: intersection(*others) / &
front_end = {"HTML", "CSS", "JavaScript", "React"}
back_end = {"Python", "Go", "JavaScript", "SQL"}

full_stack_core = front_end.intersection(back_end)
# Alternative operator syntax: full_stack_core = front_end & back_end
print(full_stack_core)  # {'JavaScript'}


# difference(*others) / - operator example
my_skills = {"Python", "Git", "Docker", "SQL"}
job_requirements = {"SQL", "Java", "C++"}

skills_i_have_but_job_doesnt_need = my_skills.difference(job_requirements)
# Alternative operator syntax: my_skills - job_requirements

print(skills_i_have_but_job_doesnt_need)  # {'Python', 'Git', 'Docker'}


# symmetric_difference(other) / ^ operator example
tea_drinkers = {"Alice", "Bob", "Charlie"}
coffee_drinkers = {"Charlie", "David", "Alice"}

only_one_beverage = tea_drinkers.symmetric_difference(coffee_drinkers)
# Alternative operator syntax: tea_drinkers ^ coffee_drinkers

print(only_one_beverage)  # {'Bob', 'David'}


# copy() method example
original = {1, 2, 3}
cloned = original.copy()

cloned.add(4)
print(original)  # {1, 2, 3} (Unchanged)
print(cloned)    # {1, 2, 3, 4}


# intersection_update(other) / &= operator example
my_set = {1, 2, 3}
target = {2, 3, 4}

my_set.intersection_update(target)
print(my_set)  # {2, 3}



# difference_update(other) / -= operator example
my_set = {1, 2, 3, 4}
target = {3, 4, 5}

my_set.difference_update(target)
print(my_set)  # {1, 2}



# symmetric_difference_update(other) / ^= operator example
my_set = {1, 2, 3}
target = {3, 4, 5}

my_set.symmetric_difference_update(target)
print(my_set)  # {1, 2, 4, 5}



# issubset(other) / <= operator example
vowels = {"a", "e", "i"}
alphabet = {"a", "e", "i", "o", "u", "b", "c", "d"}

print(vowels.issubset(alphabet))  # True
print(alphabet.issubset(vowels))  # False



# issuperset(other) / >= operator example
high_scores = {100, 95, 90, 85}
passing_scores = {90, 85}

print(high_scores.issuperset(passing_scores))  # True



# isdisjoint(other) example
odds = {1, 3, 5}
evens = {2, 4, 6}
mixed = {5, 6, 7}

print(odds.isdisjoint(evens))  # True (No overlap)
print(odds.isdisjoint(mixed))  # False (They share the number 5)