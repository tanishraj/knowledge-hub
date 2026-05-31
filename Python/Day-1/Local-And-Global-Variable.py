"""
Local and Global Variable in Python:

Local Variable:
1) Defined inside a function
2) Can be accessed only inside that function
3) Created when the function is called
4) Destroyed when the function ends

Global Variable:
1) Defined outside of any function
2) Can be accessed anywhere in the program
3) Exists the entire duration of the program
"""

# Local Variable
name = "Vaishali" # Global Variable

def my_func():
    name = "Tanish" # Local Variable
    print(f"Local Variable Name is: {name}") # Local Variable Name is: Tanish

my_func();

print(f"Global Variable Name is: {name}") # Global Variable Name is: Vaishali


# Still, want to update global value inside the function
def my_func():
    global name
    name = "Tanish" # Global Variable
    print(f"Global Variable Name is: {name}") # Global Variable Name is: Tanish

my_func();
print(f"Global Variable Name is: {name}") # Global Variable Name is: Vaishali