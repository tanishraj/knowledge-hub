"""
Dictionary in Python
A dictionary is a collection of key-value pairs. 
Each key is unique and maps to a value. 
Dictionaries are mutable, meaning you can change their content after they have been created.

Creating a Dictionary
You can create a dictionary using curly braces {} or the dict() function.

# Using curly braces
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}

# Using the dict() function
my_dict = dict(name="Alice", age=30, city="New York")

Accessing Values
You can access values in a dictionary using their corresponding keys.
name = my_dict["name"]  # Output: "Alice"
age = my_dict.get("age")  # Output: 30

Adding and Modifying Entries
You can add new key-value pairs or modify existing ones.
my_dict["email"] = "online.tanishraj@gmail.com"
my_dict["age"] = 31  # Modifying existing entry

Removing Entries
You can remove entries from a dictionary using the del statement or the pop() method.
del my_dict["city"]  # Removes the key "city"
email = my_dict.pop("email")  # Removes "email" and returns its value

Iterating Through a Dictionary
You can iterate through a dictionary using a for loop.
for key in my_dict:
    print(key, my_dict[key])

for key, value in my_dict.items():
    print(key, value)
"""

# Example of a dictionary in Python
my_dict = {
    "name": "Alice",
    "age": 30,
    "city": "New York"
}



# Accessing values
name = my_dict["name"]
age = my_dict.get("age")
print(f"Name: {name}, Age: {age}")



# Adding and modifying entries
my_dict["email"] = "alice@gmail.com"
my_dict["age"] = 31
print("Updated dictionary:", my_dict)



# Removing entries
del my_dict["city"]
email = my_dict.pop("email")
print("Email removed:", my_dict)



# Iterating through the dictionary
for key in my_dict:
    print(key, my_dict[key])



# Iterating through the dictionary using items()
for key, value in my_dict.items():
    print(key, value)



# Iterating through the dictionary using keys() and values()
for key in my_dict.keys():
    print("Key:", key)

for value in my_dict.values():
    print("Value:", value)


