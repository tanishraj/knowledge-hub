"""
is compares the exact location of the object in memory
== compares the exact value of the variable
"""

obj1 = {"name": "Tanish"}
obj2 = {"name": "Tanish"}

print(obj1 is obj2); # False
print(obj1 == obj2); # True

obj2 = obj1;
print(obj1 is obj2); # True
print(obj1 == obj2); # True


