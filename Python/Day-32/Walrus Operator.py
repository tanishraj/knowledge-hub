"""
Walrus Oeprator:
Walrus operator (:=) was introduced in Python 3.8.
It allows you to assign a value to a variable as part of an expression

Features:
1) it combines assignment and expression
2) Syntax: variable := expression
3) Return the assinged value
4) Helps reduce code duplication
"""

# Normal Example:
foods = list()

while True:
    food = input("What food do you like?")
    if(food == "quit"):
        break

    foods.append(food)

print(foods)


# Same thing can be achieved with walrus operator
foods = list()
while (food := input("What food do you like?")) != "quit":
    foods.append(food)

print(foods)
