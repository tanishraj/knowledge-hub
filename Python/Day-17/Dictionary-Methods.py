"""
Dictionary Methods in Python
There are several methods in dictionary that we will see one by one.
1. dict(): A constructor function to build dictionaries directly from sequences of key value pairs.
2. keys(): to get the list of keys from the dictionaries
3. values(): to get the list of values from the dictionaries
4. items(): to get the list of key value pairs from the dictionary
5. update(): to update the dictionary with other key-value pairs or other dictionary | Same key will be override with new value
6. clear(): clear all the values
7. pop(): removes the specified item key from the dictionary
8. popitem(): removes the last key-value pair from the dictionary
9. del: deletes the dictionary
10: get(): returns the value for a specified key
11. setDefault(): return the value of ta key if it exists, if doesn't, it inserts the key with the specified default value
12. copy(): return a shallow copy of the dictionary. This is useful when you want to modufy a dictionary without altering original one.
"""

my_dict = {"name": "Tanish", "age": 33, "profession": "Software Engineer"}
my_dict_with_constructor = dict(name="Alice", age=23, profession= "Software Analyst")
print(f"{my_dict}, {my_dict_with_constructor}"); # Both will output exact same thing with different value
# Output:
# {'name': 'Tanish', 'age': 33, 'profession': 'Software Engineer'}, {'name': 'Alice', 'age': 23, 'profession': 'Software Analyst'}


# keys()
list_of_keys = my_dict.keys();
print({"list_of_keys": list_of_keys}) # {'list_of_keys': dict_keys(['name', 'age', 'profession'])}

# values()
list_of_values = my_dict.values();
print(list_of_values) #dict_values(['Tanish', 33, 'Software Engineer'])
print(type(list_of_values)) # <class 'dict_values'>

# items()
list_of_items = my_dict.items();
for key,value in list_of_items:
    print(f"{key}:{value}");
#Output:
# <class 'dict_values'>
# name:Tanish
# age:33
# profession:Software Engineer


# update()
my_dict_with_constructor.update(my_dict)
print(my_dict); # {'name': 'Tanish', 'age': 33, 'profession': 'Software Engineer'}

# clear()
my_dict_with_constructor.clear();
print(my_dict_with_constructor) # {}

# pop()
my_dict.pop("profession");
print(my_dict) # {'name': 'Tanish', 'age': 33}

# popitem()
my_dict.popitem();
print(my_dict) # {'name': 'Tanish'}

# del
del my_dict;
# print(my_dict) # NameError: name 'my_dict' is not defined

# get()
my_dict = {"name": "Tanish", "age": 33, "profession": "Software Engineer"}
print(my_dict.get("name"));

# setDefault()
my_dict.setdefault("profession", "Python Engineer");
print(my_dict)
my_dict.setdefault("part_time", "NO");
print(my_dict)

# copy()
cloned = my_dict.copy()
cloned.popitem();
print(cloned);
print(my_dict)